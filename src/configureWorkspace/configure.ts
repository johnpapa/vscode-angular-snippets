import vscode = require('vscode');
import * as fs from 'fs';
import * as path from 'path';
import { promptForPort } from './config-utils';
import {
  PackageJson,
  getDefaultPackageJson,
  readPackageJson
} from './package-json';

function genNginxConfFile(port: string): string {
  const content = `worker_processes 4;

events { worker_connections 1024; }

http {
        ssl_session_cache   shared:SSL:10m;
        ssl_session_timeout 30m;

        #See http://blog.argteam.com/coding/hardening-node-js-for-production-part-2-using-nginx-to-avoid-node-js-load
        proxy_cache_path        /var/cache/nginx levels=1:2 keys_zone=one:8m max_size=3000m inactive=600m;
        proxy_temp_path         /var/tmp;
        include                 mime.types;
        default_type            application/octet-stream;
        sendfile                on;
        keepalive_timeout       65;

        gzip                    on;
        gzip_comp_level         6;
        gzip_vary               on;
        gzip_min_length         1000;
        gzip_proxied            any;
        gzip_types              text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript;
        gzip_buffers            16 8k;

    server {
      listen       ${port};
      server_name  localhost;

      location / {
          root   /usr/src/app;
          index  index.html;
          expires -1;
          add_header Pragma "no-cache";
          add_header Cache-Control "no-store, no-cache, must-revalidate, post-check=0, pre-check=0";
          try_files $uri$args $uri$args/ $uri $uri/ /index.html =404;
      }
    }
}
`;

  return content;
}

const FILE_TYPES = {
  'nginx.conf': genNginxConfFile
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
        'nginx files can only be generated if VS Code is opened on a folder.'
      );
    } else {
      vscode.window.showErrorMessage(
        'nginx files can only be generated if a workspace folder is picked in VS Code.'
      );
    }
    return;
  }

  const platformType = 'Node.js';
  const port = await promptForPort();
  if (!port) return;

  const serviceName = path.basename(folder.uri.fsPath).toLowerCase();
  let pkg: PackageJson = getDefaultPackageJson();
  pkg = await readPackageJson(folder);

  await Promise.all(
    Object.keys(FILE_TYPES).map(fileName => {
      return createWorkspaceFileIfNotExists(fileName, FILE_TYPES[fileName]);
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
        fs.writeFileSync(
          workspacePath,
          writerFunction(port),
          { encoding: 'utf8' }
        );
      }
    } else {
      fs.writeFileSync(
        workspacePath,
        writerFunction(port),
        { encoding: 'utf8' }
      );
    }
  }
}
