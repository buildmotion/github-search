import { Component, OnInit, OnDestroy } from '@angular/core';
import { ComponentBase, ErrorResponse } from '@angularlicious/foundation';
import { AngularliciousLoggingService, Severity } from '@angularlicious/logging';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GithubSearchService } from '../../../services/github-search/github-search.service';
import { GithubUser } from '../../../services/github-search/models/github-user.model';

@Component({
  selector: 'angularlicious-owner-results',
  templateUrl: './owner-results.component.html',
  styleUrls: ['./owner-results.component.css']
})
export class OwnerResultsComponent extends ComponentBase implements OnInit, OnDestroy {

  ownerResultSubscription: Subscription;
  showSpinnerSubscription: Subscription;
  showSpinner: boolean;
  hasData: boolean;
  user: GithubUser;
  responseMessage: string;

  constructor(
    private searchService: GithubSearchService,
    loggingService: AngularliciousLoggingService,
    router: Router
  ) {
    super('OwnerResultsComponent', loggingService, router);
  }

  ngOnInit() {
    this.ownerResultSubscription = this.searchService.onOwnerResultChange.subscribe(
      response => this.handleOwnerResponse(response),
      error => this.handleError(error),
      () => this.finishRequest(``)
    );

    this.showSpinnerSubscription = this.searchService.showOwnerResultSpinner.subscribe(
      showSpinner => {
        this.showSpinner = showSpinner;
        this.hasData = false;
      }
    );
  }

  ngOnDestroy(): void {
    this.ownerResultSubscription.unsubscribe();
    this.showSpinnerSubscription.unsubscribe();
  }

  handleOwnerResponse(response) {
    if (response instanceof ErrorResponse) {
      // error; 404?
      this.hasData = false;
      this.showSpinner = false;
      this.responseMessage = `Ugh! Nothing was found with that name.`;
    } else {
      if (response) {
        this.user = response;
        this.hasData = true;
      } else {
        this.hasData = false;
        this.showSpinner = false;
      }
    }
  }

  handleError(error) {
    this.loggingService.log(this.componentName, Severity.Error, `Something weird happened. Ughh!!!`);
  }
}
