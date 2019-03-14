import { Injectable } from '@angular/core';
import { ServiceBase, ServiceResponse } from '@angularlicious/foundation';
import { AngularliciousLoggingService } from '@angularlicious/logging';
import { Observable } from 'rxjs';
import { SearchCriteria } from '../../layouts/search-layout/models/i-search-criteria.model';

@Injectable({
  providedIn: 'root'
})
export class GithubSearchService extends ServiceBase {
 

  constructor(
    loggingService: AngularliciousLoggingService
  ) { 
    super(loggingService);
    this.serviceName = 'GithubSearchService';
  }

  searchGithub(searchCriteria: SearchCriteria): Observable<ServiceResponse> {
    throw new Error("Method not implemented.");
  }
}
