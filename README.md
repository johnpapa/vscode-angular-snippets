# Angular TypeScript Snippets for VS Code

**Now Updated for Angular 11.0.0 release**

This extension for Visual Studio Code adds snippets for Angular for TypeScript and HTML.

![Use Extension](images/use-extension.gif)

See the [CHANGELOG](CHANGELOG.md) for the latest changes

## Angular Essentials

Check out the [Angular Essentials extension](https://marketplace.visualstudio.com/items?itemName=johnpapa.angular-essentials&WT.mc_id=javascript-0000-jopapa) for more great extensions for developing with JavaScript and Angular.

## Usage

Type part of a snippet, press `enter`, and the snippet unfolds.

Alternatively, press `Ctrl`+`Space` (Windows, Linux) or `Cmd`+`Space` (macOS) to activate snippets from within the editor.

### Command Palette Commands

| Command                                              | Purpose                     |
| ---------------------------------------------------- | --------------------------- |
| express: Add simple Express server file to workspace | Adds Node.js express server |

### TypeScript Angular Snippets

| Snippet                      | Purpose                                                              |
| ---------------------------- | -------------------------------------------------------------------- |
| `a-component`                | component                                                            |
| `a-component-inline`         | component with inline template                                       |
| `a-component-root`           | root app component                                                   |
| `a-ctor-skip-self`           | angular `NgModule`'s `skipself` constructor                          |
| `a-directive`                | directive                                                            |
| `a-guard-can-activate`       | `CanActivate` guard                                                  |
| `a-guard-can-activate-child` | `CanActivateChild` guard                                             |
| `a-guard-can-deactivate`     | `CanDeactivate` guard                                                |
| `a-guard-can-load`           | `CanLoad` guard                                                      |
| `a-httpclient-get`           | `httpClient.get` with Rx Observable                                  |
| `a-http-interceptor`         | Empty Angular `HttpInterceptor` for `HttpClient`                     |
| `a-http-interceptor-headers` | Angular `HttpInterceptor` that sets headers for `HttpClient`         |
| `a-http-interceptor-logging` | Angular `HttpInterceptor` that logs traffic for `HttpClient`         |
| `a-module`                   | module                                                               |
| `a-module-root`              | root app module                                                      |
| `a-output-event`             | `@Output` event and emitter                                          |
| `a-pipe`                     | pipe                                                                 |
| `a-preload-opt-in-strategy`  | custom preload strategy that allows choosing which routes to preload |
| `a-preload-network-strategy` | custom preload strategy that preloads based on network connectivity  |
| `a-resolver`                 | resolver                                                             |
| `a-routes`                   | Route definition file                                                |
| `a-rxjs-import`              | import RxJs features                                                 |
| `a-rxjs-operators`           | import RxJs operators                                                |
| `a-route-path-404`           | 404 route path                                                       |
| `a-route-path-default`       | default route path                                                   |
| `a-route-path-with-children` | route path with children                                             |
| `a-route-path-eager`         | eager route path                                                     |
| `a-route-path-lazy`          | lazy route path                                                      |
| `a-router-events`            | listen to one or more router events                                  |
| `a-route-params-subscribe`   | subscribe to route parameters                                        |
| `a-service`                  | service with injectable provided in root                             |
| `a-service-httpclient`       | service with `HttpClient`                                            |
| `a-subscribe`                | Rx Observable subscription                                           |
| `a-trackby`                  | to create a trackby function in TypeScript for the `ngFor`           |

### NgRx Snippets

| Snippet                                      | Purpose                                                   |
| -------------------------------------------- | --------------------------------------------------------- |
| `a-ngrx-store-module`                        | create an NgRx store module                               |
| `a-ngrx-create-action`                       | create an NgRx action with `createAction`                 |
| `a-ngrx-create-action-props`                 | create an NgRx action with `createAction` with props      |
| `a-ngrx-create-reducer`                      | create an NgRx reducer with `createReducer`               |
| `a-ngrx-create-effect`                       | create an NgRx effect with `createEffect`                 |
| `a-ngrx-create-effect-api`                   | create an NgRx effect with `createEffect` for an API call |
| `a-ngrx-create-selector`                     | create an NgRx selector with `createSelector`             |
| `a-ngrx-create-selector-props`               | create an NgRx selector with `createSelector` with props  |
| `a-ngrx-data-entity-data-module-import`      | add `EntityDataModule`                                    |
| `a-ngrx-data-entity-metadata`                | create the entity metadata for NgRx                       |
| `a-ngrx-data-entity-collection-data-service` | create a data service using NgRx                          |

### Dockerfile Snippets

| Snippet                           | Purpose                                      |
| --------------------------------- | -------------------------------------------- |
| `docker-angular-node-multi-stage` | Multi-stage Dockerfile for Node with Angular |

### JavaScript Snippets

| Snippet            | Purpose                |
| ------------------ | ---------------------- |
| `ex-simple-server` | Node.js Express Server |

### HTML Snippets

| Snippet              | Purpose                                             |
| -------------------- | --------------------------------------------------- |
| `a-class`            | `[class]` binding                                   |
| `a-select`           | `<select>` control                                  |
| `a-style`            | `[style]` binding                                   |
| `a-ngClass`          | `ngClass`                                           |
| `a-ngFor`            | `*ngFor`                                            |
| `a-ngForAsync`       | `*ngFor` with async                                 |
| `a-ngFor-trackBy`    | `*ngFor` with trackBy                               |
| `a-form`             | create a form tag with ngSubmit and form attributes |
| `a-formArrayName`    | `formArrayName`                                     |
| `a-formControlName`  | `formControlName`                                   |
| `a-formGroup`        | `formGroup`                                         |
| `a-formGroupName`    | `formGroupName`                                     |
| `a-form-submit`      | create a submit button for a form                   |
| `a-ngIf`             | `*ngIf`                                             |
| `a-ngIfElse`         | `*ngIf` with `else`                                 |
| `a-ngModel`          | `ngModel`                                           |
| `a-routerLink`       | `routerLink`                                        |
| `a-routerLink-param` | `routerLink` with a route parameter                 |
| `a-ngStyle`          | `ngStyle`                                           |
| `a-ngSwitch`         | `ngSwitch`                                          |
| `a-prej`             | show the JSON form of a model                       |
| `a-preja`            | show the JSON form of a model, using async          |
| `a-ng-container`     | `<ng-container>` element                            |
| `a-ng-template`      | `<ng-template>` element                             |
| `a-ng-content`       | `<ng-content>` element                              |

### VS Code Snippets

| Snippet           | Purpose                                                              |
| ----------------- | -------------------------------------------------------------------- |
| `a-launch-chrome` | launch/debug configuration for VS Code for Chrome                    |
| `a-launch-edge`   | launch/debug configuration for VS Code for Edge                      |
| `a-task-start`    | create a task configuration for starting the Angular app for VS Code |

## Installation

1. Install Visual Studio Code 1.10.0 or higher
1. Launch Code
1. From the command palette `Ctrl`-`Shift`-`P` (Windows, Linux) or `Cmd`-`Shift`-`P` (OSX)
1. Select `Install Extension`
1. Choose the extension
1. Reload Visual Studio Code

## Credits

Thanks to the following contributors for the NgRx snippets:

- [Wes Grimes](https://twitter.com/wesgrimes)
- [Tim Deschryver](https://twitter.com/tim_deschryver)
