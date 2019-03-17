import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'angularlicious-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchType: string;

  constructor() { }

  ngOnInit() {
  }

  handleSearchType(searchTypeEvent: string) {
    if(searchTypeEvent) {
      //broadcast the [searchType] to allow child components to show/hide based on the type;
      this.searchType = searchTypeEvent;
    }
  }

}
