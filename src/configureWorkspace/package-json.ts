import vscode = require('vscode');
import * as fs from 'fs';

export interface PackageJson {
  npmStart: boolean; //has npm start
  cmd: string;
  fullCommand: string; //full command
  author: string;
  version: string;
  artifactName: string;
}

async function getPackageJson(
  folder: vscode.WorkspaceFolder
): Promise<vscode.Uri[]> {
  return vscode.workspace.findFiles(
    new vscode.RelativePattern(folder, 'package.json'),
    null,
    1,
    null
  );
}

export function getDefaultPackageJson(): PackageJson {
  return {
    npmStart: true,
    fullCommand: 'npm start',
    cmd: 'npm start',
    author: 'author',
    version: '0.0.1',
    artifactName: ''
  };
}

export async function readPackageJson(
  folder: vscode.WorkspaceFolder
): Promise<PackageJson> {
  // open package.json and look for main, scripts start
  const uris: vscode.Uri[] = await getPackageJson(folder);
  var pkg: PackageJson = getDefaultPackageJson(); //default

  if (uris && uris.length > 0) {
    const json = JSON.parse(fs.readFileSync(uris[0].fsPath, 'utf8'));

    if (json.scripts && json.scripts.start) {
      pkg.npmStart = true;
      pkg.fullCommand = json.scripts.start;
      pkg.cmd = 'npm start';
    } else if (json.main) {
      pkg.npmStart = false;
      pkg.fullCommand = 'node' + ' ' + json.main;
      pkg.cmd = pkg.fullCommand;
    } else {
      pkg.fullCommand = '';
    }

    if (json.author) {
      pkg.author = json.author;
    }

    if (json.version) {
      pkg.version = json.version;
    }
  }

  return pkg;
}
