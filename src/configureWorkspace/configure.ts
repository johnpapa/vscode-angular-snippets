import vscode = require('vscode');
import * as fs from 'fs';
import * as path from 'path';
import { getSimpleExpressFile } from './files';
import {
  promptForFolderToServe,
  promptForNodeExpressFile,
  promptForPort
} from './prompts';

const FILE_TYPES = {
  'index.js': getSimpleExpressFile
};

const YES_OR_NO_PROMPT: vscode.MessageItem[] = [
  {
    title: 'Yes',
    isCloseAffordance: false
  },
  {
    title: 'No',
    isCloseAffordance: true
  }
];

export async function configure(): Promise<void> {
  let folder: vscode.WorkspaceFolder;
  if (
    vscode.workspace.workspaceFolders &&
    vscode.workspace.workspaceFolders.length === 1
  ) {
    folder = vscode.workspace.workspaceFolders[0];
  } else {
    folder = await (<any>vscode).window.showWorkspaceFolderPick();
  }

  if (!folder) {
    if (!vscode.workspace.workspaceFolders) {
      vscode.window.showErrorMessage(
        'Express files can only be generated if VS Code is opened on a folder.'
      );
    } else {
      vscode.window.showErrorMessage(
        'Express files can only be generated if a workspace folder is picked in VS Code.'
      );
    }
    return;
  }

  const platformType = 'Node.js';

  const port = await promptForPort();
  if (!port) return;

  const folderToServe = await promptForFolderToServe();
  if (!folderToServe) return;

  const nodeFileToSave = await promptForNodeExpressFile();
  if (!nodeFileToSave) return;

  const serviceName = path.basename(folder.uri.fsPath).toLowerCase();

  await Promise.all(
    Object.keys(FILE_TYPES).map(fileName => {
      return createWorkspaceFileIfNotExists(
        nodeFileToSave,
        FILE_TYPES[fileName]
      );
    })
  );

  async function createWorkspaceFileIfNotExists(fileName, writerFunction) {
    const workspacePath = path.join(folder.uri.fsPath, fileName);
    if (fs.existsSync(workspacePath)) {
      const item: vscode.MessageItem = await vscode.window.showErrorMessage(
        `A ${fileName} already exists. Would you like to override it?`,
        ...YES_OR_NO_PROMPT
      );
      if (item.title.toLowerCase() === 'yes') {
        fs.writeFileSync(workspacePath, writerFunction(port, folderToServe), {
          encoding: 'utf8'
        });
      }
    } else {
      fs.writeFileSync(workspacePath, writerFunction(port, folderToServe), {
        encoding: 'utf8'
      });
    }
  }
}
