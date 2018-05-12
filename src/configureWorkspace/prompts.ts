import vscode = require('vscode');

export async function promptForPort(): Promise<string> {
  var opt: vscode.InputBoxOptions = {
    placeHolder: '80',
    prompt: 'What port does your app listen on?',
    value: '80'
  };

  return vscode.window.showInputBox(opt);
}

export async function promptForFolderToServe(): Promise<string> {
  var opt: vscode.InputBoxOptions = {
    placeHolder: './www',
    prompt: 'What folder shoud express serve?',
    value: './www'
  };

  return vscode.window.showInputBox(opt);
}

export async function promptForNodeExpressFile(): Promise<string> {
  var opt: vscode.InputBoxOptions = {
    placeHolder: 'index.js',
    prompt: 'What do you want to name the file?',
    value: 'index.js'
  };

  return vscode.window.showInputBox(opt);
}
