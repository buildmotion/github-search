import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ComponentBase, ServiceResponse } from '@angularlicious/foundation';
import { AngularliciousLoggingService, Severity } from '@angularlicious/logging';
import { Router } from '@angular/router';
// tslint:disable-next-line: nx-enforce-module-boundaries
import { GithubSearchService } from './../../../services/github-search/github-search.service';
import { Subject, Subscription } from 'rxjs-compat';
import { SearchCriteria } from '../models/i-search-criteria.model';

@Component({
  selector: 'angularlicious-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent extends ComponentBase implements OnInit, OnDestroy {


  searchCriteria: FormGroup;
  repositoryTextChanged = new Subject<SearchCriteria>();
  searchCriteriaChangeSubscription: Subscription;
  data: any;

  itemsPerPageOptions: number[] = [5,10,25,50,100];
  defaultPerPageOption = '10';

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
  }

  ngOnInit() {
    this.searchCriteria = this.formBuilder.group(
      {
        repositoryName: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40)
        ])
      },
      {
        itemsPerPage: new FormControl('', [
          Validators.required,
          Validators.min(1),
          Validators.max(100)
        ])
      }
    );

    this.searchCriteriaChangeSubscription = this.repositoryTextChanged.pipe()
      .debounceTime(1200)
      .distinctUntilChanged()
      .subscribe(searchCriteria => this.performRepositorySearch(searchCriteria));

    this.searchCriteria.valueChanges
      .subscribe(
        criteriaChange => this.handleSearchCriteriaChange(criteriaChange)
      );
  }

  handleSearchCriteriaChange(searchCriteria: SearchCriteria) {
    if (searchCriteria) {
      this.loggingService.log(this.componentName, Severity.Information, `Preparing to search for ${searchCriteria.repositoryName}`);
      this.repositoryTextChanged.next(searchCriteria);
    }
  }

  performRepositorySearch(searchCriteria: SearchCriteria) {
    this.loggingService.log(this.componentName, Severity.Information, `Preparing to process search criteria: ${JSON.stringify(searchCriteria)}`)
    this.searchService.searchByRepository(searchCriteria);
  }
}
