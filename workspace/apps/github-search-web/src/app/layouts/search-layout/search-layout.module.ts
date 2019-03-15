import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchComponent } from './search/search.component';
import { RouterModule } from '@angular/router';

import { SearchRoutes } from './search-layout-routing.module';
import { SiteModule } from '../../modules/site/site.module';
import { SearchFormComponent } from './search-form/search-form.component';
import { SharedModule } from '../../modules/shared/shared.module';
import { OwnerResultsComponent } from './owner-results/owner-results.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SearchRoutes),
    SharedModule,
    SiteModule // GLOBAL LAYOUT COMPONENTS;
  ],
  declarations: [
    SearchComponent,
    SearchFormComponent,
    OwnerResultsComponent
  ],
  exports: [
    SearchComponent
  ]
})
export class SearchLayoutModule { }
