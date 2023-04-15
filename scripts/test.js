var postionGptPrompt = document.lineAt(selection.active.line).range.start;

        editor.edit(editBuilder => {
            editBuilder.insert(postionGptPrompt, `GPT> `);
        });
