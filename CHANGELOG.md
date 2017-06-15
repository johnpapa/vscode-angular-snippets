## Angular TypeScript Snippets Changelog

<a name="2.3.3"></a>
# 2.3.3 (2017-06-14)

* Removed EventEmitter type from snippet, as it was implicit
* Fixed bug where event name and event type where mistakenly using the same snippet placeholder ([#57](https://github.com/johnpapa/vscode-angular-snippets/pull/57))

<a name="2.3.2"></a>
# 2.3.2 (2017-05-29)

* Added JSON schema validation for Web App Manifest
* Modified TypeScript snippets
  * Removed `module.id` from `@Component`

* Fixed all HTML and TypeScript snippets to use positional placeholders

<a name="2.3.1"></a>
# 2.3.1 (2017-05-22)

* Added TypeScript snippets for RxJS
  * RxJS Observable
  * RxJS BehaviorSubject
  * RxJS ReplaySubject
  * RxJS Subject
  * RxJS add operator
  * RxJS add observable

* Fixed all TypeScript snippets
  added positional prefix to all named variable/placeholders
  e.g. ${name} --> ${1:name}

* Removed TypeScript snippets
  * a-bootstrap

<a name="2.2.3"></a>
# 2.2.3 (2017-04-02)

* Added TypeScript snippets for
  * skip self constructor
  * default route path
  * 404 route path

<a name="2.2.2"></a>
# 2.2.2 (2017-04-01)

* Added TypeScript snippets for
  * eager route path
  * lazy route path
  * output event and emitter
  * routing guards
  * service with Http

* Added HTML snippets for
  * `[class]` binding
  * `[style]` binding
  * `[routerLink]` with a parameter
  * `<select>` control

<a name="2.1.2"></a>
# 2.1.2 (2017-03-26)

* Added `ngForAsync` snippet
* Added `ngIfElse` snippet

<a name="2.0.0"></a>
# 2.0.0 (2017-01-23)

* Change prefix from `ng2-` to `a-` now that its just "Angular"
* Added `json` pipe snippets
