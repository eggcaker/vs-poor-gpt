# vs-poor-gpt

A vscode extension for [poor gpt](https://github.com/eggcaker/poor-auto-gpt).

## Demo 


https://user-images.githubusercontent.com/21374/232218397-4f8efbe5-d6f4-4b23-9920-3cc39fef5501.mp4


## Install 
1. First make the [poor-auto-gpt](https://github.com/eggcaker/poor-auto-gpt) all set up and cli command can running on your machine.
2. You should create an excutable file named `gpt.bat`(you can change in extension configuration later) in your PATH.
3. Compile extension
   ```sh
   vsce package
   ```
4. Install extension from more menu of extesnions pannel.

## Usage

### Simple
1. Make ChatGPT website running on your chrome as poor-auto-gpt. 
2. Open a file in vscode.
3. Type some question to ChatGPT and press `Ctrl+Shift+;` to send it. 
4. The result will be shown in below the current line.

### Multi-line
If you want to send multi-line question, you can select the lines and press `Ctrl+Shift+;` to send it.
The result will be shown in below the last line of the selected lines.

## Configuration

### GPT command path  
- `vs-poor-gpt.gptPath`: The path of `gpt.bat` file. Default is `gpt.bat`.

### Keybinding
```json
  {
	"key": "ctrl+shift+;",
	"command": "vs-poor-gpt.runPoorGPT",
	"when": "editorTextFocus"
  }	
```



**Enjoy!**
