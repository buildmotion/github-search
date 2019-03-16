import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { ComponentBase, ErrorResponse } from '@angularlicious/foundation';
import { AngularliciousLoggingService, Severity } from '@angularlicious/logging';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GithubSearchService } from '../../../services/github-search/github-search.service';
import { Repository } from '../models/repository.model';

@Component({
  selector: 'angularlicious-repository-results',
  templateUrl: './repository-results.component.html',
  styleUrls: ['./repository-results.component.css']
})
export class RepositoryResultsComponent extends ComponentBase implements OnInit, OnDestroy {
  displayedColumns: string[] = ['id', 'name', 'login', 'last update'];
  dataSource: MatTableDataSource<Repository> = new MatTableDataSource<Repository>();
  @ViewChild('repositoryPaginator') paginator: MatPaginator;

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
    this.dataSource.paginator = this.paginator;

    this.repositoryResultSubscription = this.searchService.onRepositoryResultChange.subscribe(
      response => this.handleRepositoryResponse(response),
      error => this.handleError(error),
      () => this.finishRequest(`Finished processing request for repositories.`)
    );

    this.showSpinnerSubscription = this.searchService.showRepositoryResultSpinner.subscribe(
      showSpinner => {
        this.showSpinner = showSpinner;
        this.hasData = false;
      }
    );
  }

  private setupDataSource() {
    this.dataSource.paginator = this.paginator
    this.dataSource.data = this.repositories;
  }

  ngOnDestroy(): void {
    this.repositoryResultSubscription.unsubscribe();
    this.showSpinnerSubscription.unsubscribe();
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
