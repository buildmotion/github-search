import { Injectable } from '@angular/core';
import { ServiceBase, ErrorResponse } from '@angularlicious/foundation';
import { AngularliciousLoggingService } from '@angularlicious/logging';
import { ReplaySubject, Subject, Observable, Subscription } from 'rxjs';
import { BusinessProviderService } from './business/business-provider.service';
import { RepositoryResponse } from '../../layouts/search-layout/models/repository-response.model';
import { GitHubUser } from '../../layouts/search-layout/models/owner.model';
import { SearchCriteria } from '../../layouts/search-layout/models/i-search-criteria.model';
import { TechLocationCriteria } from '../../layouts/search-layout/models/i-tech-location.model';
import { UserProfileResponse } from '../../layouts/search-layout/models/user-profile.model';
import { Repository } from '../../layouts/search-layout/models/repository.model';

@Injectable({
  providedIn: 'root'
})
export class GithubSearchService extends ServiceBase {
  
  public showRepositoryResultsPanel: Subject<boolean> = new ReplaySubject<boolean>(1);
  public showTechLocationsResultsPanel: Subject<boolean> = new ReplaySubject<boolean>(1);

  public onTechnologyLocationCriteriaChange: Subject<TechLocationCriteria> = new ReplaySubject<TechLocationCriteria>(1);
  public onSearchCriteriaChange: Subject<SearchCriteria> = new ReplaySubject<SearchCriteria>(1);
  public onRepositoryResultChange: Subject<RepositoryResponse> = new ReplaySubject<RepositoryResponse>(1);
  public onTechLocationResultChange: Subject<UserProfileResponse> = new ReplaySubject<UserProfileResponse>(1);
  
  public showRepositoryResultSpinner: Subject<boolean> = new ReplaySubject<boolean>(1);
  public showTechLocationResultSpinner: Subject<boolean> = new ReplaySubject<boolean>(1);
  private _searchCriteria: SearchCriteria;
  private _totalSearches: number;
  
  private repositorySubscription: Subscription;

  public onUserResultChange: Subject<GitHubUser> = new ReplaySubject<GitHubUser>(1);
  userName: string;
  userResponse: GitHubUser;
  repositories$: Observable<Repository[]>;

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
    this._totalSearches = 0;

    //IoC: provide the current [ServiceContext] and [LoggingService] to the business provider;
    this.businessProvider.serviceContext = this.serviceContext;
    this.businessProvider.loggingService = this.loggingService;
  }

  retrieveUser(userName: string): void {
    this.resetServiceContext();
    this.userName = userName;

    this.businessProvider.retrieveUser(userName).subscribe(
      response => this.handleUserResponse(response),
      error => this.handleRepositoryErrorResponse(error),
      () => this.finishRequest(this.serviceName)
    );

    this.showRepositoryResultsPanel.next(true);
  }

  searchByRepository(searchCriteria: SearchCriteria): void {
    this.resetServiceContext();
    this._searchCriteria = searchCriteria;
    this._totalSearches = this._totalSearches + 1;

    this.showRepositoryResultSpinner.next(true);

    this.repositorySubscription = this.businessProvider.searchByRepository(searchCriteria).subscribe(
      response => this.handleRepositoryResponse(response),
      error => this.handleRepositoryErrorResponse(error),
      () => this.finishRequest(this.serviceName)
    );
  }

  searchByTechLocation(searchCriteria: TechLocationCriteria): any {
    this.resetServiceContext();
    this._totalSearches = this._totalSearches + 1;
    
    this.showTechLocationResultSpinner.next(true);

    this.businessProvider.searchByTechLocation(searchCriteria).subscribe(
      response => this.handleTechLocationResponse(response),
      error => this.handleTechLocationErrorResponse(error),
      () => this.finishRequest(this.serviceName)
    );
  }

  handleRepositoryResponse(response) {
    this.showRepositoryResultSpinner.next(false);
    this.onRepositoryResultChange.next(response);
    this.repositorySubscription.unsubscribe();
  }

  handleRepositoryErrorResponse(errorResponse: ErrorResponse) {
    if (errorResponse instanceof ErrorResponse) {
      //BUBBLE THE ERROR INFORMATION TO THE SERVICE CONSUMER;
      this.onRepositoryResultChange.error(errorResponse);
    }
    this.showRepositoryResultSpinner.next(false);
  }

  handleTechLocationResponse(response) {
    this.showRepositoryResultSpinner.next(false);
    this.onTechLocationResultChange.next(response);
  }

  handleTechLocationErrorResponse(errorResponse: ErrorResponse) {
    if (errorResponse instanceof ErrorResponse) {
      //BUBBLE THE ERROR INFORMATION TO THE SERVICE CONSUMER;
      this.onRepositoryResultChange.error(errorResponse);
    }
    this.showTechLocationResultSpinner.next(false);
  }

  handleUserResponse(response) {
    this.userResponse = response;
    this.onUserResultChange.next(response);
  }

  get searchCriteria(): SearchCriteria {
    return this._searchCriteria;
  }

  get totalSearches(): number {
    return this._totalSearches;
  }
}
