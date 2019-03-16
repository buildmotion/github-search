import { Injectable } from '@angular/core';
import { ServiceBase, ServiceResponse } from '@angularlicious/foundation';
import { AngularliciousLoggingService } from '@angularlicious/logging';
import { Observable } from 'rxjs';
import { SearchGithubAction as SearchRepositoriesAction } from './actions/search-github-action';
import { SearchCriteria } from '../../../layouts/search-layout/models/i-search-criteria.model';
import { GitHubApiService } from './git-hub-api.service';
import { RetrieveUserAction } from './actions/retrieve-user-action';

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
   * Use to retrieve the GitHub user by name.
   * @param userName 
   */
  retrieveUser(userName: string): any {
   const action = new RetrieveUserAction(userName);
   action.Do(this);
   return action.response;
  }

  /**
   * Use to coordinate the business logic of retrieving menu items for the
   * application.
   */
  searchByRepository(searchCriteria: SearchCriteria): Observable<ServiceResponse>{
    const action = new SearchRepositoriesAction(searchCriteria);
    action.Do(this);
    return action.response;
  }
}
