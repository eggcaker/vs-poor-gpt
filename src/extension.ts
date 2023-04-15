import * as vscode from 'vscode';
import { spawn } from 'child_process';



export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('vs-poor-gpt.runPoorGPT', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No active editor found.');
            return;
        }

        const { document, selections } = editor;
        const selection = selections[0];
        let input: string;

        if (selection.isEmpty) {
            input = document.lineAt(selection.active.line).text;
        } else {
            input = document.getText(selection);
        }

        const output = await runPoorGPT(input);
        const position = document.lineAt(selection.active.line).range.end;
        const insertPosition = position.with(position.line + 1, 0);

        editor.edit(editBuilder => {
            editBuilder.insert(insertPosition, `\n${output}`);
        });
    });

    context.subscriptions.push(disposable);
}

async function runPoorGPT(input: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const command = spawn('gpt', [input]);

        let output = '';
        command.stdout.on('data', (data: Buffer) => {
            output += data.toString();
        });

        command.stderr.on('data', (data: Buffer) => {
            vscode.window.showErrorMessage(`Error running poor-gpt: ${data}`);
            reject(data.toString());
        });

        command.on('close', (code: number) => {
            if (code === 0) {
                resolve(output);
            } else {
                reject(`poor-gpt exited with code ${code}`);
            }
        });
    });
}

