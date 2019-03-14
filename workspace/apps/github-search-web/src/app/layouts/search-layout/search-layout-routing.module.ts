import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';

export const SearchRoutes: Routes = [
  {
    path: 'dashboard', component: SearchComponent
  }
];

// @NgModule({
//   imports: [
//     RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class SearchLayoutRoutingModule { }
