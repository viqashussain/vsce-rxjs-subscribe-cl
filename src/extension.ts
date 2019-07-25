// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "rxjs-subscribe-cl" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.rxjs-subscribe-cl', () => {
		// The code you place here will be executed every time your command is executed

		let editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('Please highlight an observable.');
            return; // No open text editor
		}
		
		const selection = editor.selection;
		const text = editor.document.getText(editor.selection);
		const newText = `${text}.subscribe(x => console.log(x));`;

		editor.edit(x => x.replace(selection, newText));


		vscode.window.showInformationMessage(text);
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}