# Copilot Instructions — Angular Snippets Extension

## Project Overview

This is a VS Code snippets extension for Angular (version 18). It has no runtime code — the extension contributes JSON snippet definitions that VS Code loads directly. All work happens in `snippets/*.json`, `package.json`, and documentation files.

## Snippet Conventions

### Prefix Naming

- **All Angular snippets** start with `a-` (e.g., `a-component`, `a-pipe`, `a-ngFor`)
- **NgRx snippets** use `a-ngrx-` (e.g., `a-ngrx-create-action`, `a-ngrx-create-reducer`)
- **Variant suffixes** use hyphens: `a-component-standalone`, `a-component-inline`, `a-http-interceptor-logging`
- **Express snippets** use `ex-` prefix (e.g., `ex-node-server-simple`)
- **Docker snippets** use `docker-` prefix (e.g., `docker-angular-node-multi-stage`)
- Prefixes must be unique across all snippet files
- Use lowercase with hyphens — never camelCase or underscores

### Placeholder Patterns

- Use `${1:descriptive-default}` for the first value the user should fill in
- Number placeholders sequentially: `${1:...}`, `${2:...}`, `${3:...}`
- Place `$0` at the final cursor position (typically inside the main function body)
- Use realistic defaults (e.g., `${1:selector-name}`, `${2:Name}`, `${3:4200}`)
- Use `\t` for indentation — never hard-code spaces

### Body Formatting

- Each line of the snippet body is a separate string in the JSON array
- Use `\t` for indentation (VS Code adapts to user settings)
- Include blank lines (`""`) to match Angular style guide formatting
- Import statements go first, followed by a blank line, then the decorator/class

### Angular Version Alignment

- Snippets should reflect the Angular version declared in `package.json` (`displayName` and `description`)
- When Angular releases a new major version, update snippets to use current APIs and patterns
- Deprecated Angular APIs (e.g., legacy module patterns) should be kept for backward compatibility but not duplicated
- New standalone-first patterns should be added alongside existing module-based ones

## File Organization

| File | Language scope | Content |
|---|---|---|
| `snippets/typescript.json` | TypeScript | Components, services, pipes, guards, NgRx, routing |
| `snippets/html.json` | HTML | Template directives, bindings, forms, structural directives |
| `snippets/javascript.json` | JavaScript | Node.js Express server |
| `snippets/jsonc.json` | JSONC | VS Code launch configs and tasks |
| `snippets/dockerfile.json` | Dockerfile | Multi-stage Docker builds |

## Maintenance Matrix

| When this changes... | Also update... |
|---|---|
| Snippet added/modified in `snippets/*.json` | `README.md` (snippet table), `CHANGELOG.md` |
| New snippet file added to `snippets/` | `package.json` (`contributes.snippets`), `README.md`, `CHANGELOG.md` |
| Angular major version bump | `package.json` (`displayName`, `description`, `keywords`), `README.md` header, `CHANGELOG.md` |
| `package.json` version bump | `CHANGELOG.md` (new version entry) |
| Snippet prefix renamed | `README.md` (update table), `CHANGELOG.md` (note breaking change) |

## Code Quality Rules

- **Valid JSON** — all snippet files must be valid JSON. A single syntax error breaks every snippet in that file
- **No trailing commas** — JSON does not allow trailing commas
- **Consistent key naming** — use descriptive PascalCase for snippet keys (e.g., `"Angular Standalone Component"`)
- **Descriptions are required** — every snippet must have a `description` field
- **Test manually** — press F5 in VS Code, open a file of the target language, type the prefix, and verify expansion

## Do Not

- Do not add runtime TypeScript/JavaScript activation code — this is a pure snippets extension
- Do not add build steps or compilation — snippet JSON is used as-is
- Do not create npm scripts beyond `package`, `publish`, and dev tooling
- Do not use spaces for indentation in snippet bodies — always use `\t`
