import { Component, OnInit, OnDestroy, ViewChild, Input } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { ComponentBase, ErrorResponse } from '@angularlicious/foundation';
import { AngularliciousLoggingService, Severity } from '@angularlicious/logging';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GithubSearchService } from '../../../services/github-search/github-search.service';
import { Repository } from '../models/repository.model';
import { SearchCriteria } from '../models/i-search-criteria.model';

@Component({
  selector: 'angularlicious-repository-results',
  templateUrl: './repository-results.component.html',
  styleUrls: ['./repository-results.component.css']
})
export class RepositoryResultsComponent extends ComponentBase implements OnInit, OnDestroy {
  @Input() searchType: string;

  displayedColumns: string[] = ['id', 'name', 'login', 'last update'];
  dataSource: MatTableDataSource<Repository> = new MatTableDataSource<Repository>();
  @ViewChild('repositoryPaginator') paginator: MatPaginator;

  searchCriteriaSubscription: Subscription;
  repositoryResultSubscription: Subscription;
  showSpinnerSubscription: Subscription;
  showSpinner: boolean;
  hasData: boolean;
  repositories: Repository[];
  totalCount: number;
  incompleteResults: boolean
  responseMessage: string;

  constructor(
    private searchService: GithubSearchService,
    loggingService: AngularliciousLoggingService,
    router: Router
  ) {
    super('RepositoryResultsComponent', loggingService, router);
  }

  ngOnInit() {

    // ONLY INIT IF THE CORRECT TAB/FORM IS ACTIVE;
    if (this.searchType === 'repository') {
      this.dataSource.paginator = this.paginator;

      this.repositoryResultSubscription = this.searchService.onRepositoryResultChange.subscribe(
        response => this.handleRepositoryResponse(response),
        error => this.handleServiceErrors(error, this.searchService.serviceContext),
        () => this.finishRequest(`Finished processing request for repositories.`)
      );

      this.showSpinnerSubscription = this.searchService.showRepositoryResultSpinner.subscribe(
        showSpinner => {
          this.showSpinner = showSpinner;
          this.hasData = false;
        }
      );

      this.searchCriteriaSubscription = this.searchService.onSearchCriteriaChange.subscribe(
        searchCriteriaChange => this.handleSearchCriteriaChange(searchCriteriaChange)
      );
    }

  }

  private setupDataSource() {
    this.dataSource.paginator = this.paginator
    this.dataSource.data = this.repositories;
  }

  ngOnDestroy(): void {
    if (this.searchType === 'repository') {
      this.repositoryResultSubscription.unsubscribe();
      this.showSpinnerSubscription.unsubscribe();
      this.searchCriteriaSubscription.unsubscribe();
    }
  }

  handleSearchCriteriaChange(searchCriteriaChange: SearchCriteria) {
    if (searchCriteriaChange && searchCriteriaChange.itemsPerPage > 0) {
      this.paginator.pageSize = searchCriteriaChange.itemsPerPage;
    }
  }

  handleRepositoryResponse(response) {
    if (response instanceof ErrorResponse) {
      // error; 404?
      this.hasData = false;
      this.showSpinner = false;
      this.responseMessage = `Ugh! Nothing was found with that name.`;
    } else {
      if (response) {

        // setup the data;
        this.repositories = response.items;
        this.totalCount = response.total_count;
        this.incompleteResults = response.incomplete_results;

        this.setupDataSource();
        this.hasData = true;
      } else {
        this.hasData = false;
        this.showSpinner = false;
      }
    }
  }

  viewUserDetails(user: string) {
    this.routeTo('/user');
  }
}
