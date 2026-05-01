# Copilot Instructions — vscode-angular-snippets

## Project Type

This is a **VS Code snippets extension**. The product is JSON snippet files — not compiled code. There is no build step, no test suite, and no runtime logic.

## Snippet Conventions

### Prefix naming

- All Angular snippets use the `a-` prefix: `a-component`, `a-service`, `a-pipe`
- NgRx snippets use `a-ngrx-` prefix: `a-ngrx-create-action`, `a-ngrx-create-effect`
- Prefixes are kebab-case, lowercase
- Keep prefixes short but descriptive

### Snippet body

- Use `\t` for indentation (VS Code converts to user's tab setting)
- Use `${N:default}` for interactive placeholders (N starts at 1)
- Use `$0` for final cursor position — place it where the user will type next
- Each line of the body is a separate string in the JSON array
- Follow Angular's current coding style (standalone components, functional guards)

### JSON format

- Snippet files must be valid JSON — no comments, no trailing commas
- Use consistent key ordering: `prefix`, `description`, `body`
- Keep descriptions concise — match the style of existing snippets

### Angular version alignment

- Snippets should reflect current Angular idioms (see `displayName` in `package.json` for target version)
- Prefer standalone components over NgModule-based components for new snippets
- Prefer functional guards (`CanActivateFn`) over class-based guards
- Prefer `inject()` over constructor injection for new snippets

## TypeScript Conventions

- The `test/` directory contains placeholder tests — no active test framework
- TypeScript is used only for the test harness and dev tooling, not for the extension itself

## Documentation

- Every snippet must have a row in the README snippet table for its language
- Tables use the format: `| \`prefix\` | description |`
- Group snippets by category in README (TypeScript Angular, NgRx, HTML, etc.)

## Maintenance Matrix

| When this changes... | Also update... |
|---|---|
| New snippet added to any `snippets/*.json` | `README.md` (add row to the correct snippet table), `CHANGELOG.md` |
| New snippet file for a new language | `package.json` (`contributes.snippets` array), `README.md` (new table section), `AGENTS.md` (structure + language table) |
| Snippet prefix renamed | `README.md` (update the table row) |
| Snippet removed | `README.md` (remove the table row), `CHANGELOG.md` |
| Angular version bump | `package.json` (`version`, `displayName`, `description`), `README.md` (version references), `CHANGELOG.md` |
| Extension packaging/publishing | `package.json` (`version`), `CHANGELOG.md`, verify `.vscodeignore` |
| Dev container config changed | `.devcontainer/devcontainer.json`, `.devcontainer/Dockerfile` |
