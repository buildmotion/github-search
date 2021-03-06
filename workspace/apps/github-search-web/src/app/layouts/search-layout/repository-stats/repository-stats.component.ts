import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Repository } from '../models/repository.model';
import { GithubSearchService } from '../../../services/github-search/github-search.service';
import { AngularliciousLoggingService } from '@angularlicious/logging';
import { Router } from '@angular/router';
import { ComponentBase, ErrorResponse } from '@angularlicious/foundation';
import { Profile } from '../models/user-profile.model';

@Component({
  selector: 'angularlicious-repository-stats',
  templateUrl: './repository-stats.component.html',
  styleUrls: ['./repository-stats.component.css']
})
export class RepositoryStatsComponent extends ComponentBase implements OnInit, OnDestroy {

  @Input() searchType: string;

  searchCriteriaChangeSubscription: Subscription;
  repositoryResultSubscription: Subscription;
  techLocationResultSubscription: Subscription;

  repositories: Repository[];
  userProfiles: Profile[];

  totalCount: number;
  incompleteResults: boolean
  responseCount: number;
  resultPageNumber: number;
  itemsPerPage: number;
  showStatCards = false;
  totalSearches: number;

  constructor(
    private searchService: GithubSearchService,
    loggingService: AngularliciousLoggingService,
    router: Router
  ) {
    super('RepositoryResultsComponent', loggingService, router);
  }

  ngOnInit() {
    this.repositoryResultSubscription = this.searchService.onRepositoryResultChange.subscribe(
      response => this.handleRepositoryResponse(response),
      error => this.handleRepositoryResponse(error),
      () => this.finishRequest(`Finished processing changes for repository results.`)
    );

    this.techLocationResultSubscription = this.searchService.onTechLocationResultChange.subscribe(
      response => this.handleTechLocationResponse(response),
    );

    this.searchCriteriaChangeSubscription = this.searchService.onSearchCriteriaChange.subscribe(
      searchCriteria => { this.itemsPerPage = searchCriteria.itemsPerPage; }
    );
  }

  ngOnDestroy(): void {
    this.repositoryResultSubscription.unsubscribe();
    this.searchCriteriaChangeSubscription.unsubscribe();
    this.techLocationResultSubscription.unsubscribe();
  }

  handleRepositoryResponse(response) {
    if (response instanceof ErrorResponse) {
      // do not display any stats ==> hide the stat cards;
      this.showStatCards = false;
    } else {
      if (response) {
        this.showStatCards = true;

        // setup the data;
        this.repositories = response.items;
        this.totalCount = response.total_count;
        this.incompleteResults = response.incomplete_results;
        this.resultPageNumber = 1;
        this.responseCount = this.repositories.length;
        this.totalSearches = this.searchService.totalSearches;
      }
    }
  }

  handleTechLocationResponse(response) {
    if (response instanceof ErrorResponse) {
      // do not display any stats ==> hide the stat cards;
      this.showStatCards = false;
    } else {
      if (response) {
        this.showStatCards = true;

        // setup the data;
        this.userProfiles = response.items;
        this.totalCount = response.total_count;
        this.incompleteResults = response.incomplete_results;
        this.resultPageNumber = 1;
        this.responseCount = this.userProfiles.length;
        this.totalSearches = this.searchService.totalSearches;
      }
    }
  }
}
