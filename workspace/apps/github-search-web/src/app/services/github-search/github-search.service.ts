import { Injectable } from '@angular/core';
import { ServiceBase, ServiceResponse } from '@angularlicious/foundation';
import { AngularliciousLoggingService } from '@angularlicious/logging';
import { Observable, ReplaySubject, Subscription, Subject } from 'rxjs';
import { BusinessProviderService } from './business/business-provider.service';
import { GithubUser } from './models/github-user.model';

@Injectable({
  providedIn: 'root'
})
export class GithubSearchService extends ServiceBase {
 
  public onOwnerResultChange: Subject<GithubUser> = new ReplaySubject<GithubUser>();
  public showOwnerResultSpinner: Subject<boolean> = new ReplaySubject<boolean>();

  /**
   * Use to provide Github API endpoints for the application.
   * 
   * @param loggingService A general logging service/provider.
   * @param businessProvider Use to coordinate business logic and execution.
   */
  constructor(
    loggingService: AngularliciousLoggingService,
    private businessProvider: BusinessProviderService
  ) { 
    super(loggingService);
    this.serviceName = 'GithubSearchService';
  }

  searchByOwner(owner: string): void {
    // indicates spinner should display;
    this.showOwnerResultSpinner.next(true);

    this.businessProvider.searchByOwner(owner).subscribe(
      response => this.handleOwnerResponse(response),
      error => this.handleUnexpectedError(error),
      () => this.finishRequest(this.serviceName)
    );
  }

  handleOwnerResponse(response) {
    this.showOwnerResultSpinner.next(false);
    this.onOwnerResultChange.next(response);
  }
}
