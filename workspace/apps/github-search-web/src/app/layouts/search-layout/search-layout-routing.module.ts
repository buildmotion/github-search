import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { UserDetailsComponent } from './user-details/user-details.component';

export const SearchRoutes: Routes = [
  {
    path: 'dashboard', component: SearchComponent
  },
  {
    path: 'user-profile/:id', component: UserDetailsComponent
  }
];
