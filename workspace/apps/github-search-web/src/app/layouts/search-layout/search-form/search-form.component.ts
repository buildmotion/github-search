import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ComponentBase, ServiceResponse } from '@angularlicious/foundation';
import { AngularliciousLoggingService, Severity } from '@angularlicious/logging';
import { Router } from '@angular/router';
// tslint:disable-next-line: nx-enforce-module-boundaries
import { GithubSearchService } from './../../../services/github-search/github-search.service';
import { Subject, Subscription } from 'rxjs-compat';
import { SearchCriteria } from '../models/i-search-criteria.model';
import { environment } from './../../../../environments/environment';

@Component({
  selector: 'angularlicious-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent extends ComponentBase implements OnInit, OnDestroy {


  searchCriteriaFormGroup: FormGroup;
  searchCriteriaChanged = new Subject<SearchCriteria>();
  searchCriteriaChangeSubscription: Subscription;
  responseChangeSubscription: Subscription;

  itemsPerPageOptions: number[] = [5,10,25,50,100];
  defaultPerPageOption = '10';
  page = 1; // INITIAL DEFAULT PAGE FOR API;
  isDebug: boolean;

  constructor(
    loggingService: AngularliciousLoggingService,
    router: Router,
    private formBuilder: FormBuilder,
    private searchService: GithubSearchService
  ) {
    super('SearchFormComponent', loggingService, router);
  }

  ngOnDestroy(): void {
    this.searchCriteriaChangeSubscription.unsubscribe();
    this.responseChangeSubscription.unsubscribe();
  }

  ngOnInit() {
    this.isDebug = (environment.production !== true);
    this.searchCriteriaFormGroup = this.formBuilder.group(
      {
        repositoryName: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40)
        ]),
        itemsPerPage: new FormControl(this.defaultPerPageOption[2], [
          Validators.required,
          Validators.min(1),
          Validators.max(100)
        ])
      }
    );
    
    this.subscribeToSearchCriteriaChanges();
    this.subscribeToSearchFormValueChanges();
    this.subscribeToRepositoryResultChanges();
  }

  private subscribeToRepositoryResultChanges() {
    this.responseChangeSubscription = this.searchService.onRepositoryResultChange.pipe()
      .subscribe(() => { }, // do nothing with the response on this component; listening for [ErrorResponse];
        // do nothing with the response on this component; listening for [ErrorResponse];
        error => this.handleServiceErrors(error, this.searchService.serviceContext), () => this.finishRequest(`Finished processing response from the the [search criteria] form.`));
  }

  private subscribeToSearchCriteriaChanges() {
    // this.searchCriteriaChangeSubscription = this.searchCriteriaChanged.pipe()
    this.searchCriteriaChangeSubscription = this.searchService.onSearchCriteriaChange.pipe()
      .debounceTime(1200)
      .distinctUntilChanged()
      .subscribe(searchCriteria => this.performRepositorySearch(searchCriteria));
  }

  private subscribeToSearchFormValueChanges() {
    this.searchCriteriaFormGroup.valueChanges.pipe()
      .debounceTime(750)
      .subscribe(criteriaChange => this.handleSearchCriteriaChange(criteriaChange));
  }

  private handleSearchCriteriaChange(searchCriteria: SearchCriteria) {
    if (searchCriteria) {
      this.loggingService.log(this.componentName, Severity.Information, `Preparing to search for ${searchCriteria.repositoryName}`);
      this.searchService.onSearchCriteriaChange.next(searchCriteria);
      // this.searchCriteriaChanged.next(searchCriteria);
    }
  }

  private performRepositorySearch(searchCriteria: SearchCriteria) {
    if(this.searchCriteriaFormGroup.valid) {
      this.loggingService.log(this.componentName, Severity.Information, `Preparing to process search criteria: ${JSON.stringify(searchCriteria)}`)
      this.searchService.searchByRepository(searchCriteria);
    }
  }
}
