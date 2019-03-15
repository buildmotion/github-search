import { Injectable } from '@angular/core';
import { ServiceBase, ServiceResponse } from '@angularlicious/foundation';
import { AngularliciousLoggingService } from '@angularlicious/logging';
import { Observable } from 'rxjs';
import { SearchGithubAction } from './actions/search-github-action';
import { SearchCriteria } from '../../../layouts/search-layout/models/i-search-criteria.model';
import { GitHubApiService } from './git-hub-api.service';

@Injectable({
  providedIn: 'root'
})
export class BusinessProviderService extends ServiceBase {

  constructor(
    loggingService: AngularliciousLoggingService,
    public githubApiService: GitHubApiService
  ) { 
    super(loggingService)
    this.serviceName = 'BusinessProviderService';
  }

  /**
   * Use to coordinate the business logic of retrieving menu items for the
   * application.
   */
  searchByOwner(owner: string): Observable<ServiceResponse>{
    const action = new SearchGithubAction(owner);
    action.Do(this);
    return action.response;
  }
}
