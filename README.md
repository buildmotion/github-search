# Angularlicious GitHub Search

- [Angularlicious GitHub Search](#angularlicious-github-search)
  - [Requirements](#requirements)
  - [Application Setup](#application-setup)
  - [Add Web Project](#add-web-project)
  - [Library Projects](#library-projects)
    - [Configuration](#configuration)
    - [Logging](#logging)
    - [Error Handling](#error-handling)
    - [Firebase](#firebase)
    - [Contentful](#contentful)
    - [HTTP Service](#http-service)
    - [Foundation](#foundation)
    - [Business Actions](#business-actions)
    - [Rules Engine](#rules-engine)
  - [Core and Shared Modules](#core-and-shared-modules)
    - [Shared Module](#shared-module)
    - [Core Module](#core-module)
    - [Material Design Module](#material-design-module)
  - [Website Theme/Template](#website-themetemplate)
    - [Routing](#routing)
    - [Site Module](#site-module)
    - [Search Layout Module](#search-layout-module)
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
ng generate library errorHandling --publishable --module --npm-scope=angularlicious
ng generate library firebase --publishable --module --npm-scope=angularlicious
ng generate library contentful --publishable --module --npm-scope=angularlicious
ng generate library http-service --publishable --module --npm-scope=angularlicious
ng generate library foundation --publishable --module --npm-scope=angularlicious
ng generate library actions --publishable --module --npm-scope=angularlicious
ng generate library rules-engine --publishable --module --npm-scope=angularlicious
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

The application `environment` configurations will need to be updated with:

* application
* appConfig: reference the actual `json` configuration file

Each environment has the potential of a distinct configuration based on the target `appConfig` file that is referenced. 

```ts
export const environment = {
  name: 'development',
  application: 'angularlicious-github-search',
  production: false,
  appConfig: 'assets/config/configuration.development.json'
};
```

Add (2) configuration files to the application (development and production). The initialization process of the application will use the settings defined in these configuration files to setup the application services and cross-cutting concerns. The `SharedModule` contains the application's initialization mechanisms.

> Note: These configuration files should be ignored and NOT put into your code repository. They typically contain API information that you do not want to leak out into the public.

```json
{
    "logging": {
        "applicationName": "Angularlicious-GitHub-Search",
        "version": "1.0",
        "isProduction": false
    },
    "errorHandling": {
        "name": "Angularlicious-GitHub-Search",
        "includeDefaultErrorHandling": true
    },
    "loggly": {
        "applicationName": "Angularlicious-GitHub-Search",
        "version": "1.0",
        "isProduction": false
    },
    "firebase": {},
    "contentful": {
        "spaceId": "YOUR-SPACE-ID-HERE",
        "token": "YOUR-TOKEN-HERE"
    }
}
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

The logging library requires the following package.

```ts
npm install -S ngx-loggly-logger@6.0.0
```

### Error Handling

```ts
ng generate library errorHandling --publishable --module --npm-scope=angularlicious
? In which directory should the library be generated?
? Which module should import the library?
? Would you like to add a routing configuration to the library? No
? Will this library be lazy loaded? No
? Which tags would you like to add to the library? (used for linting)
? Which Unit Test Runner would you like to use for the library? Karma
CREATE libs/error-handling/karma.conf.js (491 bytes)
CREATE libs/error-handling/ng-package.json (164 bytes)
CREATE libs/error-handling/package.json (191 bytes)
CREATE libs/error-handling/tsconfig.lib.json (747 bytes)
CREATE libs/error-handling/tsconfig.spec.json (266 bytes)
CREATE libs/error-handling/tslint.json (269 bytes)
CREATE libs/error-handling/src/test.ts (700 bytes)
CREATE libs/error-handling/src/index.ts (62 bytes)
CREATE libs/error-handling/src/lib/error-handling.module.ts (258 bytes)
CREATE libs/error-handling/src/lib/error-handling.module.spec.ts (462 bytes)
UPDATE angular.json (8999 bytes)
UPDATE package.json (2598 bytes)
UPDATE nx.json (491 bytes)
UPDATE tsconfig.json (770 bytes)
```

### Firebase

```ts
 ng generate library firebase --publishable --module --npm-scope=angularlicious
? In which directory should the library be generated?
? Which module should import the library?
? Would you like to add a routing configuration to the library? No
? Will this library be lazy loaded? No
? Which tags would you like to add to the library? (used for linting)
? Which Unit Test Runner would you like to use for the library? Karma
CREATE libs/firebase/karma.conf.js (485 bytes)
CREATE libs/firebase/ng-package.json (158 bytes)
CREATE libs/firebase/package.json (185 bytes)
CREATE libs/firebase/tsconfig.lib.json (741 bytes)
CREATE libs/firebase/tsconfig.spec.json (260 bytes)
CREATE libs/firebase/tslint.json (269 bytes)
CREATE libs/firebase/src/test.ts (700 bytes)
CREATE libs/firebase/src/index.ts (56 bytes)
CREATE libs/firebase/src/lib/firebase.module.ts (253 bytes)
CREATE libs/firebase/src/lib/firebase.module.spec.ts (436 bytes)
UPDATE angular.json (7878 bytes)
UPDATE package.json (2598 bytes)
UPDATE nx.json (443 bytes)
UPDATE tsconfig.json (676 bytes
```

The Firebase library requires the following packages.

```ts
npm install -S firebase@5.7.3
npm install -S @angular/fire@5.1.1
```

### Contentful

```ts
ng generate library contentful --publishable --module --npm-scope=angularlicious
? In which directory should the library be generated?
? Which module should import the library?
? Would you like to add a routing configuration to the library? No
? Will this library be lazy loaded? No
? Which tags would you like to add to the library? (used for linting)
? Which Unit Test Runner would you like to use for the library? Karma
CREATE libs/contentful/karma.conf.js (487 bytes)
CREATE libs/contentful/ng-package.json (160 bytes)
CREATE libs/contentful/package.json (187 bytes)
CREATE libs/contentful/tsconfig.lib.json (743 bytes)
CREATE libs/contentful/tsconfig.spec.json (262 bytes)
CREATE libs/contentful/tslint.json (269 bytes)
CREATE libs/contentful/src/test.ts (700 bytes)
CREATE libs/contentful/src/index.ts (58 bytes)
CREATE libs/contentful/src/lib/contentful.module.ts (255 bytes)
CREATE libs/contentful/src/lib/contentful.module.spec.ts (446 bytes)
UPDATE angular.json (10080 bytes)
UPDATE package.json (2598 bytes)
UPDATE nx.json (535 bytes)
UPDATE tsconfig.json (856 bytes)
```

Contentful requires the following package.

```ts
npm install -S contentful@7.0.4
npm install -S marked@0.6.0
```

### HTTP Service

```ts
ng generate library http-service --publishable --module --npm-scope=angularlicious
? In which directory should the library be generated?
? Which module should import the library?
? Would you like to add a routing configuration to the library? No
? Will this library be lazy loaded? No
? Which tags would you like to add to the library? (used for linting)
? Which Unit Test Runner would you like to use for the library? Karma
CREATE libs/http-service/karma.conf.js (489 bytes)
CREATE libs/http-service/ng-package.json (162 bytes)
CREATE libs/http-service/package.json (189 bytes)
CREATE libs/http-service/tsconfig.lib.json (745 bytes)
CREATE libs/http-service/tsconfig.spec.json (264 bytes)
CREATE libs/http-service/tslint.json (269 bytes)
CREATE libs/http-service/src/test.ts (700 bytes)
CREATE libs/http-service/src/index.ts (60 bytes)
CREATE libs/http-service/src/lib/http-service.module.ts (256 bytes)
CREATE libs/http-service/src/lib/http-service.module.spec.ts (452 bytes)
UPDATE angular.json (11181 bytes)
UPDATE package.json (2598 bytes)
UPDATE nx.json (581 bytes)
UPDATE tsconfig.json (946 bytes)
```

### Foundation

```ts
ng generate library foundation --publishable --module --npm-scope=angularlicious
? In which directory should the library be generated?
? Which module should import the library?
? Would you like to add a routing configuration to the library? No
? Will this library be lazy loaded? No
? Which tags would you like to add to the library? (used for linting)
? Which Unit Test Runner would you like to use for the library? Karma
CREATE libs/foundation/karma.conf.js (487 bytes)
CREATE libs/foundation/ng-package.json (160 bytes)
CREATE libs/foundation/package.json (187 bytes)
CREATE libs/foundation/tsconfig.lib.json (743 bytes)
CREATE libs/foundation/tsconfig.spec.json (262 bytes)
CREATE libs/foundation/tslint.json (269 bytes)
CREATE libs/foundation/src/test.ts (700 bytes)
CREATE libs/foundation/src/index.ts (58 bytes)
CREATE libs/foundation/src/lib/foundation.module.ts (255 bytes)
CREATE libs/foundation/src/lib/foundation.module.spec.ts (446 bytes)
UPDATE angular.json (12262 bytes)
UPDATE package.json (2598 bytes)
UPDATE nx.json (625 bytes)
UPDATE tsconfig.json (1032 bytes)
```

### Business Actions

```ts
ng generate library actions --publishable --module --npm-scope=angularlicious
? In which directory should the library be generated?
? Which module should import the library?
? Would you like to add a routing configuration to the library? No
? Will this library be lazy loaded? No
? Which tags would you like to add to the library? (used for linting)
? Which Unit Test Runner would you like to use for the library? Karma
CREATE libs/actions/karma.conf.js (484 bytes)
CREATE libs/actions/ng-package.json (157 bytes)
CREATE libs/actions/package.json (184 bytes)
CREATE libs/actions/tsconfig.lib.json (740 bytes)
CREATE libs/actions/tsconfig.spec.json (259 bytes)
CREATE libs/actions/tslint.json (269 bytes)
CREATE libs/actions/src/test.ts (700 bytes)
CREATE libs/actions/src/index.ts (55 bytes)
CREATE libs/actions/src/lib/actions.module.ts (252 bytes)
CREATE libs/actions/src/lib/actions.module.spec.ts (431 bytes)
UPDATE angular.json (13313 bytes)
UPDATE package.json (2598 bytes)
UPDATE nx.json (666 bytes)
UPDATE tsconfig.json (1112 bytes)
```

### Rules Engine

```ts
ng generate library rules-engine --publishable --module --npm-scope=angularlicious
? In which directory should the library be generated?
? Which module should import the library?
? Would you like to add a routing configuration to the library? No
? Will this library be lazy loaded? No
? Which tags would you like to add to the library? (used for linting)
? Which Unit Test Runner would you like to use for the library? Karma
CREATE libs/rules-engine/karma.conf.js (489 bytes)
CREATE libs/rules-engine/ng-package.json (162 bytes)
CREATE libs/rules-engine/package.json (189 bytes)
CREATE libs/rules-engine/tsconfig.lib.json (745 bytes)
CREATE libs/rules-engine/tsconfig.spec.json (264 bytes)
CREATE libs/rules-engine/tslint.json (269 bytes)
CREATE libs/rules-engine/src/test.ts (700 bytes)
CREATE libs/rules-engine/src/index.ts (60 bytes)
CREATE libs/rules-engine/src/lib/rules-engine.module.ts (256 bytes)
CREATE libs/rules-engine/src/lib/rules-engine.module.spec.ts (452 bytes)
UPDATE angular.json (14414 bytes)
UPDATE package.json (2598 bytes)
UPDATE nx.json (712 bytes)
UPDATE tsconfig.json (1202 bytes)
```

The rule engine has a required dependency on the following package.

```ts
npm install -S typescript-dotnet-commonjs@4.10.0
```

## Core and Shared Modules

### Shared Module

The `SharedModule` is provides imports for 3rd-party and common modules that are not part of the domain of the application. Many of these modules participate or require configuration. Therefore, this module is responsible for managing the configuration of the applicaton using Angular `APP_INITIALIZER` providers.

```ts
ng g module modules/shared --project=github-search-web
CREATE apps/github-search-web/src/app/modules/shared/shared.module.ts (190 bytes)
```

> Note: Make sure to add the `SharedModule` to the import section of the `AppModule`. 


```ts
import { NgModule, NO_ERRORS_SCHEMA, ErrorHandler, APP_INITIALIZER } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AngularliciousFoundationModule, HttpBaseService } from '@angularlicious/foundation';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandlingModule, ErrorHandliciousService } from '@angularlicious/error-handling';
import { AngularliciousLoggingModule, AngularliciousLoggingService, ConsoleWriter, LogglyWriter } from '@angularlicious/logging';
import { ConfigurationModule, ConfigurationService } from '@angularlicious/configuration';
import { FirebaseModule, AuthService } from '@angularlicious/firebase';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentfulModule } from '@angularlicious/contentful';
import { MaterialDesignModule } from '../material-design/material-design.module';

/**
 * Shared Layout concerns;
 */
// tslint:disable-next-line: nx-enforce-module-boundaries
import { environment } from 'apps/github-search-web/src/environments/environment';

/**
 * The factory function to initialize the configuration service for the application.
 * @param configService 
 */
export function initializeConfiguration(configService: ConfigurationService) {
  console.log(`Initializing firebase configuration from [AppModule]`);
  configService.loadConfiguration();
  return () => {
    return configService;
  }
}

/**
 * The factory function to initialize the logging service and writer for the
 * application. 
 * 
 * @param loggingService 
 * @param consoleWriter 
 */
export function initializeLogWriter(loggingService: AngularliciousLoggingService, consoleWriter: ConsoleWriter) {
  console.log(`Initializing [Console Writer] from [AppModule]`);
  return () => {
    return consoleWriter;
  }
}

/**
 *  Use module to reference the common components, directives, and pipes. Use and reference
 * this module to share common references.
 */
@NgModule({
  imports: [
    AngularliciousFoundationModule,
    AngularliciousLoggingModule,
    BrowserAnimationsModule,
    ConfigurationModule.forRoot({ filePath: environment.appConfig}),
    ContentfulModule,
    ErrorHandlingModule,
    FirebaseModule,
    FormsModule,
    MaterialDesignModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [],
  exports: [
    ContentfulModule,
    FormsModule,
    HttpClientModule,
    MaterialDesignModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: ErrorHandlingModule
    }, 
    ConfigurationService,
    AngularliciousLoggingService,
    AuthService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeConfiguration,
      deps: [ConfigurationService],
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeLogWriter,
      deps: [AngularliciousLoggingService, ConsoleWriter, LogglyWriter],
      multi: true
    },
  ConsoleWriter,
  LogglyWriter,
  {
    provide: ErrorHandler,
    useClass: ErrorHandliciousService,
    deps: [ConfigurationService, AngularliciousLoggingService]
  },
  HttpBaseService, // Angularlicious; REQUIRED BASE FOR HTTP API COMMUNICATION TO WEB API END POINTS;
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule {
}
```

### Core Module

```ts
ng g module modules/core --project=github-search-web
CREATE apps/github-search-web/src/app/modules/core/core.module.ts (188 bytes)
```

> Note: Make sure to import the `CoreModule` into the `AppModule`. The `CoreModule` is a singleton - there
> should only be one instance of this module for the entire application.

```ts
import {
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';
import { CommonModule } from '@angular/common';

/** APPLICATION MODULES:
 * Use this section to import application specific modules that are [NOT] 
 * 3rd-party and/or Angular specific.
 * 
 * Importing this module is required to allow access to the public accessible
 * members of the imported module (i.e., PageLayoutModule contains a 
 * CardComponent).
 */
import { SiteModule } from './../site/site.module';
import { SharedModule } from '../shared/shared.module';

/** SERVICES:
 * Import the [service] and add to the [providers] list. This will make 
 * the specified service globally available to the application as a 
 * singleton/single instance.
 */

/**
 * Use the @NgModule attribute to configure the module members:
 *
 * - imports: import routes or modules;
 * - declarations: a list of declarable items belonging to the module (components, directives, or pipes).
 * - exports: list of components, directives, or pipes to make public to application;
 * - providers: initializes a single instance of the specified service providers;
 * - bootstrap (use for root module only): N/A
 */
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SiteModule
  ],
  declarations: [],
  exports: [
    SharedModule,
    SiteModule
  ],
  providers: []
})
export class CoreModule {
  /**
   * Use the check to determine if the [CoreModule] has been loaded in the parentModule (AppModule root).
   */
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error(
        `CoreModule is already loaded. Import it in the AppModule only.`
      );
    }
  }
}
```

### Material Design Module

Create a module to reference the many elements of Angular Material Design (i.e., modules, components, etc.).

```ts
ng add @angular/material
```

```ts
ng g module modules/material-design --project=github-search-web
CREATE apps/github-search-web/src/app/modules/material-design/material-design.module.ts (198 bytes)
```

[Use the Angular Material schematic to add Material Design to the project](https://material.angular.io/guide/getting-started). The project will attempt to use:

* form inputs
* table with paginator
* buttons
* cards
* progress spinners

The `add` schematic wil update the `index.html` file with `stylesheet` references. 

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>GithubSearchWeb</title>
  <base href="/">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<body>
  <angularlicious-root></angularlicious-root>
</body>
</html>
```

The `main.ts` is updated to include a reference to `hammerjs`.

```ts
import 'hammerjs';
```

The application's `styles.scss` is updated to include Material Design style information.

```css
/* You can add global styles to this file, and also import other style files */

html, body { height: 100%; }
body { margin: 0; font-family: Roboto, "Helvetica Neue", sans-serif; }
```

Also, `BrowserAnimationsModule` is added to the `AppModule`. 

The `angular.json` project configuration is updated to include style references.

```json
"styles": [
    "./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css",
    "apps/github-search-web/src/styles.scss"
],
```

The MaterialDesignModule references all of the modules for the different elements. This provides a single point of reference for anything Material Design. The module is imported in the `SharedModule` for convenience.

```ts
​import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatButtonToggleModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatDividerModule,
  MatTableModule,
  MatDialogModule,
  MatInputModule,
  MatSelectModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatMenuModule,
  MatTabsModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatRadioModule,
  MatTooltipModule,
  MAT_DIALOG_DEFAULT_OPTIONS
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatDividerModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatMenuModule,
    MatTabsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTooltipModule
  ],
  exports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatDividerModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSortModule,​​
    MatMenuModule,
    MatTabsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTooltipModule
  ], 
  providers: [
  ]
})
export class MaterialDesignModule {}
```

## Website Theme/Template

The application will take advantage of a professional theme/template - it will use the [Creative Tim - Material Dashboard Angular](https://www.creative-tim.com/product/material-dashboard-angular2). The next steps will be to add displayable items and their required dependencies.

### Routing

The application will require a default route and other routes to view details of the search and/or the of the GitHub user and repositories.

```ts
ng generate module modules/appRouting --project=github-search-web
CREATE apps/github-search-web/src/app/modules/app-routing/app-routing.module.ts (194 bytes)
```

### Site Module

```ts
ng g module modules/site
CREATE apps/github-search-web/src/app/modules/site/site.module.ts (188 bytes)
```

Add components for the site.

```ts
~~ng~~ g component modules/site/navbar
CREATE apps/github-search-web/src/app/modules/site/navbar/navbar.component.html (25 bytes)
CREATE apps/github-search-web/src/app/modules/site/navbar/navbar.component.spec.ts (628 bytes)
CREATE apps/github-search-web/src/app/modules/site/navbar/navbar.component.ts (280 bytes)
CREATE apps/github-search-web/src/app/modules/site/navbar/navbar.component.css (0 bytes)
UPDATE apps/github-search-web/src/app/modules/site/site.module.ts (264 bytes)
```

```ts
ng g component modules/site/sidebar
CREATE apps/github-search-web/src/app/modules/site/sidebar/sidebar.component.html (26 bytes)
CREATE apps/github-search-web/src/app/modules/site/sidebar/sidebar.component.spec.ts (635 bytes)
CREATE apps/github-search-web/src/app/modules/site/sidebar/sidebar.component.ts (284 bytes)
CREATE apps/github-search-web/src/app/modules/site/sidebar/sidebar.component.css (0 bytes)
UPDATE apps/github-search-web/src/app/modules/site/site.module.ts (346 bytes)
```

```ts
ng g component modules/site/footer
CREATE apps/github-search-web/src/app/modules/site/footer/footer.component.html (25 bytes)
CREATE apps/github-search-web/src/app/modules/site/footer/footer.component.spec.ts (628 bytes)
CREATE apps/github-search-web/src/app/modules/site/footer/footer.component.ts (280 bytes)
CREATE apps/github-search-web/src/app/modules/site/footer/footer.component.css (0 bytes)
UPDATE apps/github-search-web/src/app/modules/site/site.module.ts (424 bytes)
```

> Note: Make sure to export the components in the `SiteModule` to allow them to be consumed.

```ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavbarComponent, SidebarComponent, FooterComponent],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ]
})
export class SiteModule { }
```

### Search Layout Module

A `SearchLayoutModule` will be the container for the search feature of the application. This module will require
its own routing and will be lazy-loaded.

```ts
ng generate module layouts/searchLayout --project=github-search-web --routing
CREATE apps/github-search-web/src/app/layouts/search-layout/search-layout-routing.module.ts (255 bytes)
CREATE apps/github-search-web/src/app/layouts/search-layout/search-layout.module.ts (304 bytes)
```

Add the target component.

```ts
ng generate component layouts/search-layout/search --project=github-search-web
CREATE apps/github-search-web/src/app/layouts/search-layout/search/search.component.html (25 bytes)
CREATE apps/github-search-web/src/app/layouts/search-layout/search/search.component.spec.ts (628 bytes)
CREATE apps/github-search-web/src/app/layouts/search-layout/search/search.component.ts (280 bytes)
CREATE apps/github-search-web/src/app/layouts/search-layout/search/search.component.css (0 bytes)
UPDATE apps/github-search-web/src/app/layouts/search-layout/search-layout.module.ts (380 bytes)
```

Now that there is a domain module and a target component, the `AppRoutingModule` can be configured with a 
default route. The default will use the `SearchComponent`. 

```ts
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from '../../layouts/search-layout/search/search.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: SearchComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/search-layout/search-layout.module#SearchLayoutModule'
  }]}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
```

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
