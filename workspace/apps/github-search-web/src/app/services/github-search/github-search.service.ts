import { Injectable } from '@angular/core';
import { ServiceBase } from '@angularlicious/foundation';
import { AngularliciousLoggingService } from '@angularlicious/logging';
import { ReplaySubject, Subject } from 'rxjs';
import { BusinessProviderService } from './business/business-provider.service';
import { RepositoryResponse } from '../../layouts/search-layout/models/repository-response.model';
import { GitHubUser } from '../../layouts/search-layout/models/owner.model';
import { SearchCriteria } from '../../layouts/search-layout/models/i-search-criteria.model';

@Injectable({
  providedIn: 'root'
})
export class GithubSearchService extends ServiceBase {
 
  public onRepositoryResultChange: Subject<RepositoryResponse> = new ReplaySubject<RepositoryResponse>();
  public showRepositoryResultSpinner: Subject<boolean> = new ReplaySubject<boolean>();
  private repositoryResponse: RepositoryResponse;
  private _searchCriteria: SearchCriteria;

  public onUserResultChange: Subject<GitHubUser> = new ReplaySubject<GitHubUser>();
  userName: string;
  userResponse: GitHubUser;

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

  retrieveUser(userName: string) : void {
    this.userName = userName;

    this.businessProvider.retrieveUser(userName).subscribe(
      response => this.handleUserResponse(response),
      error => this.handleUnexpectedError(error),
      () => this.finishRequest(this.serviceName)
    );
  }

  searchByRepository(searchCriteria: SearchCriteria): void {
    this._searchCriteria = searchCriteria;

    // indicates spinner should display;
    this.showRepositoryResultSpinner.next(true);

    this.businessProvider.searchByRepository(searchCriteria).subscribe(
      response => this.handleRepositoryResponse(response),
      error => this.handleUnexpectedError(error),
      () => this.finishRequest(this.serviceName)
    );
  }

  handleRepositoryResponse(response) {
    if(response instanceof RepositoryResponse) {
      this.repositoryResponse = response;
    }
    this.showRepositoryResultSpinner.next(false);
    this.onRepositoryResultChange.next(response);
  }

  handleUserResponse(response) {
    if(response instanceof GitHubUser) {
      this.userResponse = response;
    }

    this.onUserResultChange.next(response);
  }
  
  /**
   * Use to retrieve the current value of the repository name search criteria.
   */
  get searchCriteria(): SearchCriteria {
    return this._searchCriteria;
  }
}
