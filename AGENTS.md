# AI Agent Guide — Angular Snippets for VS Code

This is a **VS Code snippets extension** that provides Angular code snippets for TypeScript, HTML, JavaScript, Dockerfile, and JSONC files. There is no runtime code — the extension contributes JSON snippet files that VS Code loads directly.

## Repository Structure

```
vscode-angular-snippets/
├── snippets/
│   ├── typescript.json       # Angular component, service, pipe, guard, NgRx snippets
│   ├── html.json             # Angular template directives and bindings
│   ├── javascript.json       # Node.js Express server snippet
│   ├── jsonc.json            # VS Code launch/task configuration snippets
│   └── dockerfile.json       # Multi-stage Docker build snippet
├── test/
│   └── extension.test.ts     # Test scaffold (currently commented out)
├── images/                   # Extension icon and demo GIF
├── .devcontainer/            # Dev container configuration
├── .vscode/                  # Launch and settings for extension development
├── package.json              # Extension manifest — declares snippet contributions
├── README.md                 # Snippet reference tables and usage guide
├── CHANGELOG.md              # Version history
├── CONTRIBUTING.md           # Contribution guidelines
├── ISSUE_TEMPLATE.md         # Bug report template
├── PULL_REQUEST_TEMPLATE.md  # PR checklist
└── LICENSE.md                # MIT license
```

## Tech Stack

| Layer | Technology |
|---|---|
| Extension type | VS Code snippets (no activation code) |
| Snippet format | VS Code snippet JSON |
| Language | JSON (snippets), TypeScript (unused test scaffold) |
| Package manager | npm |
| Packaging | `vsce package` / `vsce publish` |

## How VS Code Snippets Work

Each file in `snippets/` is a JSON object where every key is a snippet:

```json
{
  "Angular Component": {
    "prefix": "a-component",
    "description": "Angular component",
    "body": [
      "import { Component, OnInit } from '@angular/core';",
      "",
      "@Component({",
      "\tselector: '${1:selector-name}',",
      "\ttemplateUrl: '${2:name}.component.html'",
      "})",
      "",
      "export class ${3:Name}Component implements OnInit {",
      "\tconstructor() { }",
      "",
      "\tngOnInit() { }$0",
      "}"
    ]
  }
}
```

### Key Concepts

| Field | Purpose |
|---|---|
| **Key** (e.g. `"Angular Component"`) | Human-readable name shown in IntelliSense |
| `prefix` | Trigger text the user types to activate the snippet |
| `description` | Tooltip shown alongside the snippet in the completion list |
| `body` | Array of lines inserted when the snippet is selected |

### Placeholder Syntax

| Pattern | Meaning |
|---|---|
| `${1:default}` | Tab stop 1 with default text — user can type to replace |
| `${2:name}` | Tab stop 2 — Tab key moves between numbered stops |
| `$0` | Final cursor position after all tab stops are visited |
| `\t` | Tab character (VS Code converts to user's indent setting) |
| `\\${...\\}` | Escaped braces for literal `${...}` in output (used in JSONC snippets) |

### Language Scoping

`package.json` → `contributes.snippets` maps each snippet file to a VS Code language ID:

```json
"contributes": {
  "snippets": [
    { "language": "typescript", "path": "./snippets/typescript.json" },
    { "language": "html",       "path": "./snippets/html.json" },
    { "language": "javascript", "path": "./snippets/javascript.json" },
    { "language": "jsonc",      "path": "./snippets/jsonc.json" },
    { "language": "dockerfile", "path": "./snippets/dockerfile.json" }
  ]
}
```

Snippets only appear when editing a file of the matching language.

## How to Add a New Snippet

1. **Choose the correct file** in `snippets/` based on the target language
2. **Add a new JSON entry** with a descriptive key, `prefix`, `description`, and `body`
3. **Follow the prefix convention**: all Angular snippets use the `a-` prefix (e.g., `a-component`, `a-ngFor`); NgRx snippets use `a-ngrx-`
4. **Use numbered placeholders** (`${1:default}`) for values the user should customize — order them logically
5. **Place `$0`** at the final cursor position
6. **Use `\t` for indentation** — never hard-code spaces
7. **Update `README.md`** — add the snippet to the appropriate table (TypeScript, HTML, etc.)
8. **Update `CHANGELOG.md`** — document the new snippet under a new version entry
9. **If adding a new language scope**: also add the `language`/`path` entry to `contributes.snippets` in `package.json`

## Build & Package

```bash
npm install            # install dev dependencies
npm run package        # creates .vsix file via vsce
npm run publish        # publish to VS Code Marketplace
```

There is no build step — snippet JSON files are used as-is.

## Testing

There is no automated test suite. Validation is manual:

1. Press **F5** in VS Code to launch the Extension Development Host
2. Open a file of the target language (e.g., a `.ts` file)
3. Type the snippet prefix and verify the snippet appears and expands correctly
4. Tab through all placeholders to confirm ordering and defaults

## Common Pitfalls

- **Invalid JSON** — a trailing comma or missing quote breaks all snippets in that file. Always validate JSON before committing
- **Prefix collisions** — every prefix must be unique across all snippet files. Check existing prefixes before adding new ones
- **Placeholder numbering** — tab stops must be sequential starting from `${1:...}`. Gaps or duplicates cause unexpected tabbing behavior
- **Forgetting to update README** — every snippet must have a corresponding row in the README tables
- **package.json sync** — if you add a new snippet file, you must register it in `contributes.snippets`
