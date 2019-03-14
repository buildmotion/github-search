import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchComponent } from './search/search.component';
import { RouterModule } from '@angular/router';

import { SearchRoutes } from './search-layout-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SearchRoutes),
  ],
  declarations: [SearchComponent],
  exports: [
    SearchComponent
  ]
})
export class SearchLayoutModule { }
