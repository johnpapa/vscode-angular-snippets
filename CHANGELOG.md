## Angular Snippets Changelog

<a name="2.11.0"></a>
# 2.11.0 (2017-11-13)

* Added `rx-operators` for Rx operators import
* Updated images
* Updated to support Angular v5
* Updated some snippets to use lettable operators
  * `a-http-interceptor-logging`
  * `a-service-httpclient`

> Thanks to https://github.com/mohammedzamakhan for the `rx-operators` PR.

<a name="2.9.1"></a>
# 2.9.1 (2017-10-23)

* Merged PR to fix a bug with the `canActivateChild` snippet

<a name="2.9.0"></a>
# 2.9.0 (2017-10-18)

* Removed Optional Theme

<a name="2.8.0"></a>
# 2.8.0 (2017-10-17)

* Added Optional Theme

<a name="2.7.0"></a>
# 2.7.0 (2017-09-04)

* Added TypeScript snippets
  * `a-http-interceptor-logging`, Angular `HttpInterceptor` that logs traffic
  * `a-http-interceptor-headers`, Angular `HttpInterceptor` that sets headers

* Updated TypeScript snippet
  * `a-http-interceptor` to be an empty interceptor

<a name="2.6.0"></a>
# 2.6.0 (2017-09-03)

* Added TypeScript snippets
  * `a-http-interceptor`, Angular `HttpInterceptor` for `HttpClient`

<a name="2.5.0"></a>
# 2.5.0 (2017-09-02)

* Added TypeScript snippets
  * `a-router-events`

<a name="2.4.3"></a>
# 2.4.3 (2017-08-24)

* Added HTML snippets
  * `a-ngFor-trackBy`

* Added TypeScript snippets
  * `a-component-inline`

<a name="2.4.2"></a>
# 2.4.2 (2017-08-21)

* Fixes
  * `a-service-httpclient` now imports correct module

<a name="2.4.0"></a>
# 2.4.0 (2017-07-15)

* Added TypeScript snippets for HttpClient
  * `a-httpclient-get` HttpClient.get
  * `a-service-httpclient` Service template for HttpClient

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
