import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchLayoutRoutingModule } from './search-layout-routing.module';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    CommonModule,
    SearchLayoutRoutingModule
  ],
  declarations: [SearchComponent]
})
export class SearchLayoutModule { }
