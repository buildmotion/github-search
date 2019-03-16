import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Repository } from '../models/repository.model';
import { GithubSearchService } from '../../../services/github-search/github-search.service';
import { AngularliciousLoggingService } from '@angularlicious/logging';
import { Router } from '@angular/router';
import { ComponentBase, ErrorResponse } from '@angularlicious/foundation';

@Component({
  selector: 'angularlicious-repository-stats',
  templateUrl: './repository-stats.component.html',
  styleUrls: ['./repository-stats.component.css']
})
export class RepositoryStatsComponent extends ComponentBase implements OnInit, OnDestroy {
 

  repositoryResultSubscription: Subscription;
  repositories: Repository[];
  totalCount: number;
  incompleteResults: boolean
  responseCount: number;
  showStatCards = false;
  
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
      () => this.finishRequest(``)
    );
  }

  ngOnDestroy(): void {
    this.repositoryResultSubscription.unsubscribe();
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

        if(this.repositories) {
          this.responseCount = this.repositories.length;
        }
      } 
    }
  }
}
