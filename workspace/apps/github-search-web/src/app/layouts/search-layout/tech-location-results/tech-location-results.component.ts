import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ComponentBase, ErrorResponse } from '@angularlicious/foundation';
import { AngularliciousLoggingService } from '@angularlicious/logging';
import { Router } from '@angular/router';
import { GithubSearchService } from '../../../services/github-search/github-search.service';
import { Profile } from 'selenium-webdriver/firefox';

@Component({
  selector: 'angularlicious-tech-location-results',
  templateUrl: './tech-location-results.component.html',
  styleUrls: ['./tech-location-results.component.css']
})
export class TechLocationResultsComponent extends ComponentBase implements OnInit, OnDestroy {
  

  onTechLocationResultChanges: Subscription;
  hasData: boolean;
  showSpinner: boolean;
  responseMessage: string;
  userProfiles: Profile[];
  totalCount: any;
  incompleteResults: any;
  
  constructor(
    private searchService: GithubSearchService,
    loggingService: AngularliciousLoggingService,
    router: Router
  ) { 
    super('TechLocationResultsComponent', loggingService, router)
  }

  ngOnInit() {
    this.onTechLocationResultChanges = this.searchService.onTechLocationResultChange.subscribe(
      response => this.handleTechLocationResultChange(response),
      error => this.handleServiceErrors(error, this.searchService.serviceContext),
      () => this.finishRequest( `Finished processing updates to the technology/location results.`)
    );
  }

  ngOnDestroy(): void {
    this.onTechLocationResultChanges.unsubscribe();
  }

  handleTechLocationResultChange(response) {
    if (response instanceof ErrorResponse) {
      // error; 404?
      this.hasData = false;
      this.showSpinner = false;
      this.responseMessage = `Ugh! Nothing was found with that cool combination...try a different one.`;
    } else {
      if (response) {

        // setup the data;
        this.userProfiles = response.items;
        this.totalCount = response.total_count;
        this.incompleteResults = response.incomplete_results;
        this.hasData = true;
      } else {
        this.hasData = false;
        this.showSpinner = false;
      }
    }
  }
}
