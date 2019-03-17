import { Injectable } from '@angular/core';
import { ServiceBase, ErrorResponse } from '@angularlicious/foundation';
import { AngularliciousLoggingService } from '@angularlicious/logging';
import { ReplaySubject, Subject, Observable } from 'rxjs';
import { BusinessProviderService } from './business/business-provider.service';
import { RepositoryResponse } from '../../layouts/search-layout/models/repository-response.model';
import { GitHubUser } from '../../layouts/search-layout/models/owner.model';
import { SearchCriteria } from '../../layouts/search-layout/models/i-search-criteria.model';

@Injectable({
  providedIn: 'root'
})
export class GithubSearchService extends ServiceBase {
 
  public onSearchCriteriaChange: Subject<SearchCriteria> = new ReplaySubject<SearchCriteria>(1);
  public onRepositoryResultChange: Subject<RepositoryResponse> = new ReplaySubject<RepositoryResponse>(1);
  public showRepositoryResultSpinner: Subject<boolean> = new ReplaySubject<boolean>(1);
  private repositoryResponse: RepositoryResponse;
  private _searchCriteria: SearchCriteria;
  private _totalSearches: number;

  public onUserResultChange: Subject<GitHubUser> = new ReplaySubject<GitHubUser>(1);
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

    //IoC: provide the current [ServiceContext] and [LoggingService] to the business provider;
    this.businessProvider.serviceContext = this.serviceContext;
    this.businessProvider.loggingService = this.loggingService;
  }

  retrieveUser(userName: string) : void {
    this.resetServiceContext();
    this.userName = userName;

    this.businessProvider.retrieveUser(userName).subscribe(
      response => this.handleUserResponse(response),
      error => this.handleRepositoryErrorResponse(error),
      () => this.finishRequest(this.serviceName)
    );
  }

  searchByRepository(searchCriteria: SearchCriteria): void {
    this.resetServiceContext();
    this._searchCriteria = searchCriteria;
    this._totalSearches++;

    this.showRepositoryResultSpinner.next(true);

    this.businessProvider.searchByRepository(searchCriteria).subscribe(
      response => this.handleRepositoryResponse(response),
      error => this.handleRepositoryErrorResponse(error),
      () => this.finishRequest(this.serviceName)
    );
  }

  handleRepositoryResponse(response) {
    this.repositoryResponse = response;
    this.showRepositoryResultSpinner.next(false);
    this.onRepositoryResultChange.next(response);
  }

  handleRepositoryErrorResponse(errorResponse: ErrorResponse) {
    if(errorResponse instanceof ErrorResponse) {
      this.repositoryResponse = new RepositoryResponse(); 

      //BUBBLE THE ERROR INFORMATION TO THE SERVICE CONSUMER;
      this.onRepositoryResultChange.error(errorResponse);
    }
    this.showRepositoryResultSpinner.next(false);
  }

  handleUserResponse(response) {
    if(response instanceof GitHubUser) {
      this.userResponse = response;
    }
    this.onUserResultChange.next(response);
  }
  
  /**
   * Use to retrieve the current value of the repository name search criteria.
  get searchCriteria(): SearchCriteria {
    return this._searchCriteria;
  }

  get totalSearches(): number {
    return this._totalSearches;
  }
}
