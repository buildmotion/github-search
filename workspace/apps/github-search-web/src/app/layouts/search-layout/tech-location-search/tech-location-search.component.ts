import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { ComponentBase } from '@angularlicious/foundation';
import { AngularliciousLoggingService, Severity } from '@angularlicious/logging';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { GithubSearchService } from '../../../services/github-search/github-search.service';
import { Subscription } from 'rxjs';
import { TechLocationCriteria } from '../models/i-tech-location.model';

@Component({
  selector: 'angularlicious-tech-location-search',
  templateUrl: './tech-location-search.component.html',
  styleUrls: ['./tech-location-search.component.css']
})
export class TechLocationSearchComponent extends ComponentBase implements OnInit, OnDestroy {
  techLocationFormGroup: FormGroup;
  techLocationFormGroupSubscription: Subscription;
  techLocationCriteriaChangeSubscription: Subscription;

  itemsPerPageOptions: number[] = [5, 10, 25, 50, 100];
  defaultPerPageOption = '10';
  page = 1; // INITIAL DEFAULT PAGE FOR API;

  constructor(
    private formBuilder: FormBuilder,
    private searchService: GithubSearchService,
    loggingService: AngularliciousLoggingService,
    router: Router
  ) {
    super('TechLocationSearchComponent', loggingService, router)
  }

  ngOnInit() {
    this.techLocationFormGroup = this.formBuilder.group(
      {
        location: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(35)
        ]),
        technology: new FormControl('', [
          Validators.required
        ]),
        itemsPerPage: new FormControl(this.defaultPerPageOption[2], [
          Validators.required,
          Validators.min(1),
          Validators.max(100)
        ])
      }
    );

    this.techLocationFormGroupSubscription = this.techLocationFormGroup.valueChanges.pipe()
      .debounceTime(1500)
      .subscribe(
        formChange => {
          this.handleFormValueChange(formChange);
          this.searchService.showRepositoryResultsPanel.next(false);
          this.searchService.showTechLocationsResultsPanel.next(true);
        }
      );

    this.techLocationCriteriaChangeSubscription = this.searchService.onTechnologyLocationCriteriaChange.pipe()
      .debounceTime(599)
      .subscribe(criteria => this.performTechLocationSearch(criteria))

  }

  ngOnDestroy(): void {
    this.techLocationFormGroupSubscription.unsubscribe();
    this.techLocationCriteriaChangeSubscription.unsubscribe();
  }

  handleFormValueChange(techLocationCriteria) {
    this.searchService.onTechnologyLocationCriteriaChange.next(techLocationCriteria);
  }

  performTechLocationSearch(searchCriteria: TechLocationCriteria) {
    if (this.techLocationFormGroup.valid) {
      this.loggingService.log(this.componentName, Severity.Information, `Preparing to process search criteria: ${JSON.stringify(searchCriteria)}`)
      this.searchService.searchByTechLocation(searchCriteria);
    }
  }

  toggleResultsPanel() {
    this.searchService.showRepositoryResultsPanel.next(false);
    this.searchService.showTechLocationsResultsPanel.next(true);
  }
}
