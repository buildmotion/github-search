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
import { SearchLayoutModule } from '../../layouts/search-layout/search-layout.module';

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
    SearchLayoutModule,
    SharedModule,
    SiteModule
  ],
  declarations: [],
  exports: [
    SearchLayoutModule,
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
