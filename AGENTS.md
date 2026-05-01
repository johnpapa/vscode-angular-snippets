# Angular Snippets for VS Code — Agent Guide

This is a **VS Code snippets extension** — not a traditional application. The "product" is JSON snippet definitions that VS Code injects into its editor, scoped by language. There is no runtime code, no build output, and no test suite.

## Repository Structure

```
vscode-angular-snippets/
├── snippets/
│   ├── typescript.json       # Angular TypeScript snippets (components, services, pipes, guards, etc.)
│   ├── javascript.json       # Express server snippet
│   ├── html.json             # Angular template directive snippets (ngIf, ngFor, routerLink, etc.)
│   ├── jsonc.json            # VS Code launch/task configuration snippets
│   └── dockerfile.json       # Multi-stage Docker build snippet for Angular apps
├── test/
│   ├── extension.test.ts     # Extension smoke test (placeholder)
│   ├── index.ts              # Test runner entry point
│   └── test.html             # Test HTML fixture
├── images/
│   ├── angular-shield.png    # Extension icon
│   └── use-extension.gif     # Usage demo GIF
├── .devcontainer/
│   ├── devcontainer.json     # Dev container config (Node 20)
│   └── Dockerfile            # Dev container image
├── .vscode/
│   ├── settings.json         # Editor settings (Peacock colors)
│   └── launch.json           # Extension host debug configs
├── code_of_conduct/
│   ├── README.md             # Code of conduct text
│   └── LICENSE               # Code of conduct license
├── package.json              # Extension manifest — THE product spec
├── package-lock.json         # Dependency lockfile
├── README.md                 # Snippet reference tables, installation guide
├── CHANGELOG.md              # Version history (follows Angular major versions)
├── CONTRIBUTING.md           # Contribution guidelines
├── LICENSE.md                # MIT license
├── ISSUE_TEMPLATE.md         # Legacy issue template (root-level)
├── PULL_REQUEST_TEMPLATE.md  # PR template (root-level)
├── .vscodeignore             # Files excluded from published extension
└── .gitignore                # Git ignore rules
```

## Tech Stack

- **Extension type:** VS Code snippets extension (content-driven, not logic-driven)
- **Content format:** JSON snippet definitions following the [VS Code snippet grammar](https://code.visualstudio.com/docs/editor/userdefinedsnippets)
- **Languages scoped:** TypeScript, JavaScript, HTML, JSONC, Dockerfile
- **Dev dependencies:** TypeScript, `@vscode/test-web` (for vscode.dev testing)
- **Publisher:** `johnpapa` on the VS Code Marketplace
- **Version:** See `package.json` for the current version (tracks Angular major versions)

## Build & Run

There is no build step. Snippet JSON files are read directly by VS Code.

```bash
# Install dev dependencies (only needed for testing/packaging)
npm install

# Test in browser (vscode.dev mode)
npm run open-in-browser

# Debug locally — press F5 in VS Code to launch Extension Host
# (uses .vscode/launch.json "Launch Extension" config)

# Package for distribution
npm run package

# Publish to Marketplace
npm run publish
```

## Testing

There is no automated test suite that validates snippet content. The `test/` directory contains a placeholder smoke test for the extension host.

**Manual testing:**
1. Press F5 to launch the Extension Development Host
2. Open a `.ts` file and type a snippet prefix (e.g., `a-component`)
3. Verify the snippet expands correctly with proper tab stops and placeholders
4. Repeat for `.html`, `.js`, `.jsonc`, and `Dockerfile` files

## Key Patterns and Conventions

### Snippet anatomy

Every snippet in the JSON files follows this structure:

```json
{
  "Snippet Display Name": {
    "prefix": "a-kebab-name",
    "description": "Short description of what it generates",
    "body": [
      "line 1",
      "\tindented line with ${1:placeholder}",
      "$0"
    ]
  }
}
```

- **Prefix naming:** All Angular snippets use the `a-` prefix (e.g., `a-component`, `a-service`, `a-pipe`)
- **NgRx snippets** use `a-ngrx-` prefix (e.g., `a-ngrx-create-action`)
- **Tab stops:** Use `${N:default}` for interactive placeholders, `$0` for final cursor position
- **Indentation:** Use `\t` for indentation inside snippet bodies (VS Code converts to user's setting)

### Language scoping

Each snippet file is scoped to a specific VS Code language ID via `package.json` → `contributes.snippets`:

| File | Language scope |
|------|---------------|
| `snippets/typescript.json` | `typescript` |
| `snippets/javascript.json` | `javascript` |
| `snippets/html.json` | `html` |
| `snippets/jsonc.json` | `jsonc` |
| `snippets/dockerfile.json` | `dockerfile` |

### Version tracking

The extension version tracks Angular major versions (e.g., `18.x.x` for Angular 18). The `displayName` in `package.json` also reflects the current Angular version.

## Adding a New Snippet

1. **Choose the correct snippet file** in `snippets/` based on the target language
2. **Pick a prefix** following the naming convention: `a-` for Angular, `a-ngrx-` for NgRx
3. **Write the snippet body** using VS Code snippet syntax with tab stops (`${1:placeholder}`) and final cursor (`$0`)
4. **Add a description** — keep it concise, matching the style of existing snippets
5. **Update `README.md`** — add a row to the appropriate snippet table (TypeScript, HTML, etc.)
6. **Update `CHANGELOG.md`** — add an entry under the current version section
7. **Test manually** — press F5, open a file of the target language, type the prefix, verify expansion

### Adding a new language scope

If adding snippets for a language not yet covered:

1. Create `snippets/{language}.json` with the snippet definitions
2. Add an entry to `contributes.snippets` in `package.json`
3. Add a new table section in `README.md`
4. Update this file (`AGENTS.md`) to reflect the new file in the structure

## Common Pitfalls

- **`package.json` IS the product spec** — the `contributes.snippets` array defines what VS Code loads. If a snippet file exists but isn't registered here, it won't work
- **JSON, not JSONC** — snippet files must be valid JSON (no comments, no trailing commas)
- **Tab stops matter** — incorrect `${N}` numbering breaks the tab-stop flow for users
- **Don't forget README** — every snippet must have a corresponding row in the README table
- **Version alignment** — the extension version number tracks the Angular major version it targets
- **Root-level templates** — `ISSUE_TEMPLATE.md` and `PULL_REQUEST_TEMPLATE.md` live at the repo root, not under `.github/`
