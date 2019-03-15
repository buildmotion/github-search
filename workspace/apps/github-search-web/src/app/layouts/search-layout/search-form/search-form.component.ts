import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ComponentBase, ServiceResponse } from '@angularlicious/foundation';
import { AngularliciousLoggingService, Severity } from '@angularlicious/logging';
import { Router } from '@angular/router';
// tslint:disable-next-line: nx-enforce-module-boundaries
import { GithubSearchService } from './../../../services/github-search/github-search.service';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'angularlicious-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent extends ComponentBase implements OnInit, OnDestroy {


  searchCriteria: FormGroup;
  ownerTextChanged = new Subject<string>();
  ownerChangeSubscription: Subscription;
  data: any;

  constructor(
    loggingService: AngularliciousLoggingService,
    router: Router,
    private formBuilder: FormBuilder,
    private searchService: GithubSearchService
  ) {
    super('SearchFormComponent', loggingService, router);
  }

  ngOnDestroy(): void {
    this.ownerChangeSubscription.unsubscribe();
  }

  ngOnInit() {
    this.searchCriteria = this.formBuilder.group(
      {
        owner: new FormControl('', [
          Validators.required,
          Validators.minLength(2)
        ]),
        fullName: new FormControl('')
      }
    );

    this.ownerChangeSubscription = this.ownerTextChanged
      .debounceTime(1200)
      .distinctUntilChanged()
      .subscribe(owner => this.performOwnerSearch(owner));

    this.searchCriteria.get('owner').valueChanges
      .subscribe(
        ownerChange => this.handleOwnerChange(ownerChange)
      );
  }

  handleOwnerChange(owner: string) {
    if (owner && owner.length >= 2) {
      this.loggingService.log(this.componentName, Severity.Information, `Preparing to search for ${owner}`);
      this.ownerTextChanged.next(owner);
    }
  }

  performOwnerSearch(owner) {
    this.loggingService.log(this.componentName, Severity.Information, `Preparing to process search criteria: ${JSON.stringify(owner.value)}`)
    this.searchService.searchByOwner(owner);
  }
}
