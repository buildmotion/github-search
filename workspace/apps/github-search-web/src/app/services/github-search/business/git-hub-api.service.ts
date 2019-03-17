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
import { RepositoryResponse } from '../../../layouts/search-layout/models/repository-response.model';
import { TechLocationCriteria } from '../../../layouts/search-layout/models/i-tech-location.model';

@Injectable({
  providedIn: 'root'
})
export class GitHubApiService extends HttpBaseService {
  
  pageSize = 100;

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
    super(http, loggingService);
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


  searchRepositories<GithubUser>(searchCriteria: SearchCriteria): Observable<RepositoryResponse> {
    const requestUrl = `https://api.github.com/search/repositories?q=${searchCriteria.repositoryName}&sort=stars&order=desc&per_page=${this.pageSize}`;
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

  /**
   * Use to search for GitHub users by location and technology.
   * @param searchCriteria 
   */
  searchTechLocation(searchCriteria: TechLocationCriteria): Observable<any> {
    const requestUrl = `https://api.github.com/search/users?q=location:${searchCriteria.location}+language:${searchCriteria.technology}&sort=score&order=desc&per_page=${this.pageSize}`;
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
