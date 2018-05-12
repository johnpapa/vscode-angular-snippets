import vscode = require('vscode');
import { configure } from './configureWorkspace/configure';

export async function activate(ctx: vscode.ExtensionContext): Promise<void> {
  ctx.subscriptions.push(
    vscode.commands.registerCommand('angular.configureExpressServer', configure)
  );
}
