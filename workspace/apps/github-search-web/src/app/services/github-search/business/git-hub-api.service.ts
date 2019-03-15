import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { HttpBaseService, ServiceResponse } from '@angularlicious/foundation';
import {
  AngularliciousLoggingService,
  Severity
} from '@angularlicious/logging';
import { HttpRequestMethod } from '@angularlicious/foundation';

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

  searchByOwner<GithubUser>(owner: string) : Observable<any> {
    const requestUrl = 'https://api.github.com/users/' + owner;
    const message = `${this.serviceName} preparing to call: ${requestUrl}`;
    this.loggingService.log(this.serviceName, Severity.Information, message);

    const options = this.httpService.createRequestOptions(
      HttpRequestMethod.get,
      this.httpService.createGithubHeader(false),
      requestUrl,
      null
    );
    // this.httpService.get(options).subscribe(
    //   payload => this.handleSuccess(payload),
    //   error => this.handleHttpError(error, options),
    //   () => this.finish(`Finished processing request for ${options.requestUrl}`)
    // );

    return this.httpService.get(options);
  }
}
