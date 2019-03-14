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
