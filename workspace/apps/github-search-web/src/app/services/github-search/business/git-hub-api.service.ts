import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { HttpBaseService, ServiceResponse } from '@angularlicious/foundation';
import {
  AngularliciousLoggingService,
  Severity
} from '@angularlicious/logging';
import { HttpRequestMethod } from '@angularlicious/foundation';
import { SearchCriteria } from '../../../layouts/search-layout/models/i-search-criteria.model';

@Injectable({
  providedIn: 'root'
})
export class GitHubApiService extends HttpBaseService {

  /**
   * 
   * @param http The Angular HTTP client.
   * @param httpService An HTTP service that provides features to create API/Http requests.
   * @param loggingService A general purpose logging service.
   */
  constructor(
    http: HttpClient,
    private httpService: HttpBaseService,
    loggingService: AngularliciousLoggingService
  ) { 
    super(http, loggingService)
  }

  /**
   * Use to retrieve GitHub user information.
   * @param userName the owner name of the repository.
   */
  retrieveUser(userName: string): Observable<any> {
    const requestUrl = `https://api.github.com/users/${userName}`;
    const message = `${this.serviceName} preparing to call: ${requestUrl}`;
    this.loggingService.log(this.serviceName, Severity.Information, message);

    const options = this.httpService.createRequestOptions(
      HttpRequestMethod.get,
      this.httpService.createGithubHeader(false),
      requestUrl,
      null
    );
    return this.httpService.get(options);
}

  searchRepositories<GithubUser>(searchCriteria: SearchCriteria) : Observable<any> {
    // const requestUrl = `https://api.github.com/search/repositories?q=${repository}+language:typescript&sort=stars&order=desc`;
    const requestUrl = `https://api.github.com/search/repositories?q=${searchCriteria}&sort=stars&order=desc&per_page=${searchCriteria.itemsPerPage}`;
    const message = `${this.serviceName} preparing to call: ${requestUrl}`;
    this.loggingService.log(this.serviceName, Severity.Information, message);

    const options = this.httpService.createRequestOptions(
      HttpRequestMethod.get,
      this.httpService.createGithubHeader(false),
      requestUrl,
      null
    );
    return this.httpService.get(options);
  }
}
