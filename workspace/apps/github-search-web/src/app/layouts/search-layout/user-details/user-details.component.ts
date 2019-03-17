import { Component, OnInit, OnDestroy } from '@angular/core';
import { GithubSearchService } from '../../../services/github-search/github-search.service';
import { AngularliciousLoggingService } from '@angularlicious/logging';
import { ComponentBase, ErrorResponse } from '@angularlicious/foundation';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { GithubUser } from '../../../services/github-search/models/github-user.model';

@Component({
  selector: 'angularlicious-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent extends ComponentBase implements OnInit, OnDestroy {

  userNameSubscription: Subscription;
  userResponseSubscription: Subscription;
  userName: string;
  user: GithubUser;

  constructor(
    private searchService: GithubSearchService,
    loggingService: AngularliciousLoggingService,
    router: Router,
    private route: ActivatedRoute
  ) {
    super('', loggingService, router);
  }

  ngOnInit() {
    this.userNameSubscription = this.route.params.subscribe(params => {
      // this.id = +params['id']; // (+) converts string 'id' to a number
      this.userName = params['id'];
    });

    this.userResponseSubscription = this.searchService.onUserResultChange.subscribe(
      response => this.handleUserResponse(response),
      error => this.handleError(error),
      () => this.finishRequest(`Finished request for user: ${this.userName}`)
    );

    // initiate the retrieve of the specified user;
    this.searchService.retrieveUser(this.userName);
  }


  ngOnDestroy(): void {
    this.userNameSubscription.unsubscribe();
    this.userResponseSubscription.unsubscribe();
  }


  handleUserResponse(response) {
    if (response instanceof ErrorResponse) {
      // error: 404?
    } else {
      this.user = response;
    }
  }
}
