/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

import vscode = require('vscode');
import { configure } from './configureWorkspace/configure';

export async function activate(ctx: vscode.ExtensionContext): Promise<void> {
  ctx.subscriptions.push(
    vscode.commands.registerCommand('angular.configureNginx', configure)
  );
}
