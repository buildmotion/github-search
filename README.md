# Angularlicious GitHub Search

- [Angularlicious GitHub Search](#angularlicious-github-search)
  - [Requirements](#requirements)
  - [Application Setup](#application-setup)
  - [Add Web Project](#add-web-project)
  - [Library Projects](#library-projects)
    - [Configuration](#configuration)
    - [Logging](#logging)
    - [Error Handling](#error-handling)
  - [Angular Version Information](#angular-version-information)
  - [Nrwl.io Information](#nrwlio-information)
    - [Nrwl Extensions for Angular (Nx)](#nrwl-extensions-for-angular-nx)
    - [Quick Start & Documentation](#quick-start--documentation)
    - [Generate your first application](#generate-your-first-application)
    - [Development server](#development-server)
    - [Code scaffolding](#code-scaffolding)
    - [Build](#build)
    - [Running unit tests](#running-unit-tests)
    - [Running end-to-end tests](#running-end-to-end-tests)
    - [Further help](#further-help)

The objective of this application is to use the GitHub search API. 

## Requirements

* use GitHub public search API
* search for GitHub users
  * display search results in a grid with paging
  * show user details
  * include navigation to GitHub for result item
  * pagination with previous and next
  * include total count of results
* Deploy application
* Provide access to the GitHub repository for review

The application will make use of external libraries/packages to provide features and/or infrastructure and cross-cutting concerns for the application.

* will use Angularlicious cross-cutting concern libraries for:
  * configuration
  * logging
  * security
  * firebase

## Application Setup

Create a new workspace for the application and required library projects. Use the Nrwl.io Nx Workspace.

```ts
create-nx-workspace workspace
Creating a sandbox with the CLI and Nx Schematics...
added 368 packages from 256 contributors and audited 15266 packages in 20.559s
found 0 vulnerabilities

ng new "workspace" --collection=@nrwl/schematics
? What is the npm scope you would like to use for your Nx Workspace? angularlicious
? Which Package Manager would you like to use for your workspace? npm
CREATE workspace/.prettierrc (25 bytes)
CREATE workspace/angular.json (307 bytes)
CREATE workspace/karma.conf.js (1012 bytes)
CREATE workspace/nx.json (205 bytes)
CREATE workspace/package.json (2469 bytes)
CREATE workspace/README.md (1861 bytes)
CREATE workspace/tsconfig.json (423 bytes)
CREATE workspace/tslint.json (2307 bytes)
CREATE workspace/.editorconfig (245 bytes)
CREATE workspace/.gitignore (503 bytes)
CREATE workspace/apps/.gitkeep (1 bytes)
CREATE workspace/libs/.gitkeep (0 bytes)
CREATE workspace/tools/tsconfig.tools.json (254 bytes)
CREATE workspace/tools/schematics/.gitkeep (0 bytes)
```

## Add Web Project

Create a new web project to implement the GitHub Search UI features.

```ts
ng generate application github-search-web --routing --style=scss --dry-run
? In which directory should the application be generated?
? Which Unit Test Runner would you like to use for the application? Karma [ https://karma-runner.github.io ]
? Which E2E Test Runner would you like to use for the application? Protractor [ https://www.protractortest.org ]
? Which tags would you like to add to the application? (used for linting)
CREATE apps/github-search-web-e2e/protractor.conf.js (752 bytes)
CREATE apps/github-search-web-e2e/tsconfig.e2e.json (248 bytes)
CREATE apps/github-search-web-e2e/src/app.e2e-spec.ts (313 bytes)
CREATE apps/github-search-web-e2e/src/app.po.ts (219 bytes)
CREATE apps/github-search-web/browserslist (388 bytes)
CREATE apps/github-search-web/karma.conf.js (494 bytes)
CREATE apps/github-search-web/tsconfig.app.json (230 bytes)
CREATE apps/github-search-web/tsconfig.spec.json (293 bytes)
CREATE apps/github-search-web/tslint.json (269 bytes)
CREATE apps/github-search-web/src/favicon.ico (5430 bytes)
CREATE apps/github-search-web/src/index.html (324 bytes)
CREATE apps/github-search-web/src/main.ts (372 bytes)
CREATE apps/github-search-web/src/polyfills.ts (3234 bytes)
CREATE apps/github-search-web/src/test.ts (642 bytes)
CREATE apps/github-search-web/src/styles.scss (80 bytes)
CREATE apps/github-search-web/src/assets/.gitkeep (0 bytes)
CREATE apps/github-search-web/src/environments/environment.prod.ts (51 bytes)
CREATE apps/github-search-web/src/environments/environment.ts (662 bytes)
CREATE apps/github-search-web/src/app/app.module.ts (485 bytes)
CREATE apps/github-search-web/src/app/app.component.html (602 bytes)
CREATE apps/github-search-web/src/app/app.component.spec.ts (1106 bytes)
CREATE apps/github-search-web/src/app/app.component.ts (233 bytes)
CREATE apps/github-search-web/src/app/app.component.scss (0 bytes)
UPDATE angular.json (4655 bytes)
UPDATE package.json (2469 bytes)
UPDATE nx.json (313 bytes)
```

Verify the new web project can build and run. 

```ts
ng serve
```

Add a  `launch.json` configuration for the project. Update the port of the localhost to use: `4200`. Run the debugger
to launch the application. 

```json
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "chrome",
            "request": "launch",
            "name": "Launch localhost",
            "url": "http://localhost:4200",
            "webRoot": "${workspaceFolder}"
        }
    ]
}
```



## Library Projects

Create a set of library projects for cross-cutting concerns. Use the `--npm-scope` switch to scope all of the 
library projects to `angularlicious`. 

```ts
ng generate library configuration --publishable --module --npm-scope=angularlicious
ng generate library logging --publishable --module --npm-scope=angularlicious
```

### Configuration

Create a new library project to manage the configuration for the application. There will be other libraries and 
features that will require configuration. 

* error handling
* logging
* firebase
* content

```ts
ng generate library configuration --publishable --module --npm-scope=angularlicious
? In which directory should the library be generated?
? Which module should import the library?
? Would you like to add a routing configuration to the library? No
? Will this library be lazy loaded? No
? Which tags would you like to add to the library? (used for linting)
? Which Unit Test Runner would you like to use for the library? Karma
CREATE libs/configuration/karma.conf.js (490 bytes)
CREATE libs/configuration/ng-package.json (163 bytes)
CREATE libs/configuration/package.json (190 bytes)
CREATE libs/configuration/tsconfig.lib.json (746 bytes)
CREATE libs/configuration/tsconfig.spec.json (265 bytes)
CREATE libs/configuration/tslint.json (269 bytes)
CREATE libs/configuration/src/test.ts (700 bytes)
CREATE libs/configuration/src/index.ts (61 bytes)
CREATE libs/configuration/src/lib/configuration.module.ts (258 bytes)
CREATE libs/configuration/src/lib/configuration.module.spec.ts (461 bytes)
UPDATE angular.json (5766 bytes)
UPDATE package.json (2598 bytes)
UPDATE nx.json (360 bytes)
UPDATE tsconfig.json (514 bytes)
```

### Logging

```ts
ng generate library logging --publishable --module --npm-scope=angularlicious
? In which directory should the library be generated?
? Which module should import the library?
? Would you like to add a routing configuration to the library? No
? Will this library be lazy loaded? No
? Which tags would you like to add to the library? (used for linting)
? Which Unit Test Runner would you like to use for the library? Karma
CREATE libs/logging/karma.conf.js (484 bytes)
CREATE libs/logging/ng-package.json (157 bytes)
CREATE libs/logging/package.json (184 bytes)
CREATE libs/logging/tsconfig.lib.json (740 bytes)
CREATE libs/logging/tsconfig.spec.json (259 bytes)
CREATE libs/logging/tslint.json (269 bytes)
CREATE libs/logging/src/test.ts (700 bytes)
CREATE libs/logging/src/index.ts (55 bytes)
CREATE libs/logging/src/lib/logging.module.ts (252 bytes)
CREATE libs/logging/src/lib/logging.module.spec.ts (431 bytes)
UPDATE angular.json (6817 bytes)
UPDATE package.json (2598 bytes)
UPDATE nx.json (401 bytes)
UPDATE tsconfig.json (594 bytes)
```

### Error Handling

## Angular Version Information
The following shows the version of Angular used for the project. 

```ts
ng v

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 7.0.1
Node: 10.0.0
OS: win32 x64
Angular: 7.2.9
... animations, common, compiler, compiler-cli, core, forms
... language-service, platform-browser, platform-browser-dynamic
... router

Package                           Version
-----------------------------------------------------------
@angular-devkit/architect         0.10.7
@angular-devkit/build-angular     0.10.7
@angular-devkit/build-optimizer   0.10.7
@angular-devkit/build-webpack     0.10.7
@angular-devkit/core              7.0.7
@angular-devkit/schematics        7.0.1
@angular/cli                      7.0.1
@ngtools/webpack                  7.0.7
@schematics/angular               7.0.1
@schematics/update                0.10.1
rxjs                              6.3.3
typescript                        3.1.6
webpack                           4.19.1
```

## Nrwl.io Information

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) using [Nrwl Nx](https://nrwl.io/nx).

```ts
create-nx-workspace angularlicious-github-search
```

### Nrwl Extensions for Angular (Nx)

Nx is an open source toolkit for enterprise Angular applications.

Nx is designed to help you create and build enterprise grade Angular applications. It provides an opinionated approach to application project structure and patterns.

### Quick Start & Documentation

[Watch a 5-minute video on how to get started with Nx.](http://nrwl.io/nx)

### Generate your first application

Run `ng generate app myapp` to generate an application. When using Nx, you can create multiple applications and libraries in the same CLI workspace. Read more [here](http://nrwl.io/nx).

### Development server

Run `ng serve --project=myapp` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name --project=myapp` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build --project=myapp` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
