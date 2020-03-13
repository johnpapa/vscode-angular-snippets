## Angular Snippets Changelog

<a name="9.1.2"></a>

# 9.1.2 (2020-03-07)

- Added a prompt for the debugging task for VS Code
- Added extensionKind workspace, to fix [The extension cannot be installed into VSO](https://github.com/johnpapa/vscode-angular-snippets/issues/109)

<a name="9.1.1"></a>

# 9.1.1 (2020-02-22)

- Added `a-trackby` to create a trackby function in TypeScript for the `ngFor`
- Removed `a-module-routing` and replaced with `a-routes`. Routes will be defined in a `router.ts` file and no more Routing Module.

<a name="9.0.1"></a>

# 9.0.1 (2020-02-10)

Changes

- Revise all providedIn snippets to prompt user for a value
- Update `a-http-interceptor-logging` for RxJS move (#107)
- Update ngrx effects - wrap with return (#100)
- Various interceptor fixes
- Revised routing module to be part of regular module
- Added `a-preload-opt-in-strategy` as a custom preload strategy that allows choosing which routes to preload
- Added `a-preload-network-strategy` as a custom preload strategy that preloads based on network connectivity

<a name="8.3.1"></a>

# 8.3.1 (2020-02-01)

- Revised `a-http-interceptor` to prompt for interceptor name
- Revised interceptors to use `@Injectable()`

# 8.3.0 (2019-12-18)

- Added `a-form` to create a form tag with ngSubmit and form attributes
- Added `a-form-submit` to create a submit button for a form
- Fixed `a-service` to create a service with injectable provided in root
- Added `a-ng-container` to create `<ng-container>` element
- Added `a-ng-template` to create `<ng-template>` element
- Added `a-ng-content` to create `<ng-content>` element
- Updated dockerfile to use node 12

<a name="8.2.0"></a>

# 8.2.0 (2019-11-18)

- Removed duplicate service snippet
- Refactored `a-service` to create a service with injectable provided in root

<a name="8.1.1"></a>

# 8.1.1 (2019-06-11)

- Fixed typos in NgRx snippets for `createReducer` and `createEffect`
- Moved NgRx snippets into separate section of README

<a name="8.1.0"></a>

# 8.1.0 (2019-06-07)

- Added NgRx snippets for the creator functions: `createAction`, `createEffect`, `createReducer`, and `createSelector`
- Updated `ngrx-data` snippets for `NgRx` version 8
- Fixed display and description names for version 8
- Removed `a-ngrx-data-store-module`, replaced with new `a-ngrx-store-module` and `a-ngrx-data-entity-data-module-import`
- Added "credits" to the Readme

<a name="8.0.0"></a>

# 8.0.0 (2019-06-07)

- Updated `a-route-path-lazy` to use the newly supported `import` syntax for lazy loading.

<a name="7.1.6"></a>

# 7.1.6 (2019-05-08)

- Added `a-resolver` to create an Angular resolver

<a name="7.1.5"></a>

# 7.1.5 (2019-05-04)

- Added "extensionKind": "ui"` to support remote development features in VS Code (see [#91](https://github.com/johnpapa/vscode-peacock/pull/91/))

<a name="7.1.4"></a>

# 7.1.4 (2019-04-25)

Added HTML snippet

- `a-formArrayName`

Fixes

- Replaced some unknown invisible character with a real space
- Fixed escape characters on tasks.json

<a name="7.1.1"></a>

# 7.1.1 (2019-04-24)

Added snippets or creating VS Code configurations for debugging

- `a-launch-chrome` launch/debug configuration for VS Code for Chrome
- `a-launch-edge` launch/debug configuration for VS Code for Edge
- `a-task-start` create a task configuration for starting the Angular app for VS Code

Maintenance

- fixed `npm audit` issues with `devDepedencies`

<a name="7.0.1"></a>

# 7.0.1 (2018-11-05)

Added NgRx-Data snippets

- Create an NgRx Data store module `a-ngrx-data-store-module`
- Create the entity metadata for NgRx Data `a-ngrx-data-entity-metadata`
- Create a data service using NgRx data entities `a-ngrx-data-entity-collection-data-service`

# 6.3.0 (2018-10-11)

- Removed `a-module-routing` since the CLi does this for us and the new snippet `a-module-with-routing` is something the CLI doesn't
- Modified `a-module-with-routing` to add `forChild` or `forRoot` as a prompt

<a name="6.2.0"></a>

# 6.2.0 (2018-10-06)

- Added `a-module-with-routing` to create an Angular module with routing combined into one file
- Modified `a-route-path-404` to remove `pathMatchFull`, as it is no longer needed
- Modified all services to default to using the `providedIn` syntax

<a name="6.1.5"></a>

# 6.1.5 (2018-08-14)

- Added `a-injectable-providedin`

<a name="6.1.4"></a>

# 6.1.4 (2018-08-11)

- Updated the routing children snippet to allow replacement of the main path

<a name="6.1.3"></a>

# 6.1.3 (2018-08-06)

- Docker Snippets
  - Updated dockerfile snippet to look for server.js in the root by default. Works better out of the box with the CLI this way

<a name="6.1.1"></a>

# 6.1.1 (2018-05-12)

- Docker Snippets

  - Renamed `docker-angular-multi-stage` to `docker-angular-node-multi-stage` for an node.js Dockerfile with Angular

- Added command to the Command Palette for adding a new Express server file

<a name="6.0.0"></a>

# 6.0.0 (2018-05-05)

- Added documentation to README for new snippets
- Updated the `README.md` for v6
- Updated version to v6, to match Angular

- New Node.js Express snippet

  - Snippet that is ideal for serving a simple node.js express app that serves the angular app
    - `ex-node-server-simple`

- Added
  - `a-rxjs-import` to import rxjs features from `rxjs` (e.g. Observable, of, Subject)
  - `a-rxjs-operator-import` to import rxjs operators (e.g. map, tap, catchError)
- Removed several RxJs snippets as RxJS v6 recommends importing directly from `rxjs`
  - `rx-add-operator`
  - `rx-add-observable`
  - `rx-behavior-subject`
  - `rx-subject`
  - `rx-replay-subject`
  - `rx-observable`
- Removed older Http library snippets in favor of HttpClient
  - `a-http-get`
  - `a-service-http`

<a name="2.16.1"></a>

# 2.16.1 (2018-04-03)

- Fixed bug where dockerfile was pointing at wrong output folder

<a name="2.15.0"></a>

# 2.15.0 (2018-03-25)

- Added TypeScript snippets
  - `a-preload-strategy`

<a name="2.14.0"></a>

# 2.14.0 (2018-02-25)

- Added TypeScript snippets
  - `a-route-path-with-children`
  - `a-route-params-subscribe`

<a name="2.13.0"></a>

# 2.13.0 (2018-02-20)

- Added multi-stage Docker file snippet
  - `docker-angular-multi-stage`

<a name="2.12.0"></a>

# 2.12.0 (2018-01-29)

- update `a-routerLink` and `a-routerLinkParam` to include `routerLinkActive`
- Added HTML snippets
  - `a-formControlName`
  - `a-formGroup`
  - `a-formGroupName`

> Thanks to https://github.com/doggy8088 for the PR and idea
> Thanks to https://github.com/johnpapa/vscode-angular-snippets/pull/75 for the reactive forms

<a name="2.11.2"></a>

# 2.11.2 (2017-11-18)

- Fixed `a-prej` in HTML
- Updated title of the extension

<a name="2.11.0"></a>

# 2.11.0 (2017-11-13)

- Added `rx-operators` for Rx operators import
- Updated images
- Updated to support Angular v5
- Updated some snippets to use lettable operators
  - `a-http-interceptor-logging`
  - `a-service-httpclient`

> Thanks to https://github.com/mohammedzamakhan for the `rx-operators` PR.

<a name="2.9.1"></a>

# 2.9.1 (2017-10-23)

- Merged PR to fix a bug with the `canActivateChild` snippet

<a name="2.9.0"></a>

# 2.9.0 (2017-10-18)

- Removed Optional Theme

<a name="2.8.0"></a>

# 2.8.0 (2017-10-17)

- Added Optional Theme

<a name="2.7.0"></a>

# 2.7.0 (2017-09-04)

- Added TypeScript snippets

  - `a-http-interceptor-logging`, Angular `HttpInterceptor` that logs traffic
  - `a-http-interceptor-headers`, Angular `HttpInterceptor` that sets headers

- Updated TypeScript snippet
  - `a-http-interceptor` to be an empty interceptor

<a name="2.6.0"></a>

# 2.6.0 (2017-09-03)

- Added TypeScript snippets
  - `a-http-interceptor`, Angular `HttpInterceptor` for `HttpClient`

<a name="2.5.0"></a>

# 2.5.0 (2017-09-02)

- Added TypeScript snippets
  - `a-router-events`

<a name="2.4.3"></a>

# 2.4.3 (2017-08-24)

- Added HTML snippets

  - `a-ngFor-trackBy`

- Added TypeScript snippets
  - `a-component-inline`

<a name="2.4.2"></a>

# 2.4.2 (2017-08-21)

- Fixes
  - `a-service-httpclient` now imports correct module

<a name="2.4.0"></a>

# 2.4.0 (2017-07-15)

- Added TypeScript snippets for HttpClient
  - `a-httpclient-get` HttpClient.get
  - `a-service-httpclient` Service template for HttpClient

<a name="2.3.3"></a>

# 2.3.3 (2017-06-14)

- Removed EventEmitter type from snippet, as it was implicit
- Fixed bug where event name and event type where mistakenly using the same snippet placeholder ([#57](https://github.com/johnpapa/vscode-angular-snippets/pull/57))

<a name="2.3.2"></a>

# 2.3.2 (2017-05-29)

- Added JSON schema validation for Web App Manifest
- Modified TypeScript snippets

  - Removed `module.id` from `@Component`

- Fixed all HTML and TypeScript snippets to use positional placeholders

<a name="2.3.1"></a>

# 2.3.1 (2017-05-22)

- Added TypeScript snippets for RxJS

  - RxJS Observable
  - RxJS BehaviorSubject
  - RxJS ReplaySubject
  - RxJS Subject
  - RxJS add operator
  - RxJS add observable

- Fixed all TypeScript snippets
  added positional prefix to all named variable/placeholders
  e.g. ${name} --> ${1:name}

- Removed TypeScript snippets
  - a-bootstrap

<a name="2.2.3"></a>

# 2.2.3 (2017-04-02)

- Added TypeScript snippets for
  - skip self constructor
  - default route path
  - 404 route path

<a name="2.2.2"></a>

# 2.2.2 (2017-04-01)

- Added TypeScript snippets for

  - eager route path
  - lazy route path
  - output event and emitter
  - routing guards
  - service with Http

- Added HTML snippets for
  - `[class]` binding
  - `[style]` binding
  - `[routerLink]` with a parameter
  - `<select>` control

<a name="2.1.2"></a>

# 2.1.2 (2017-03-26)

- Added `ngForAsync` snippet
- Added `ngIfElse` snippet

<a name="2.0.0"></a>

# 2.0.0 (2017-01-23)

- Change prefix from `ng2-` to `a-` now that its just "Angular"
- Added `json` pipe snippets
