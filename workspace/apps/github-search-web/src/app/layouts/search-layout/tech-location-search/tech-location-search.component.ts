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
  @Output() searchType: EventEmitter<string> = new EventEmitter();

  techLocationFormGroup: FormGroup;
  techLocationFormGroupSubscription: Subscription;
  techLocationCriteriaChangeSubscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private searchService: GithubSearchService,
    loggingService: AngularliciousLoggingService,
    router: Router
  ) {
    super('TechLocationSearchComponent', loggingService, router)
  }

  ngOnInit() {
    // USE TO INDICATE THE FORM TYPE;
    this.searchType.emit('tech-location-search');

    this.techLocationFormGroup = this.formBuilder.group(
      {
        location: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(35)
        ]),
        technology: new FormControl('', [
          Validators.required
        ])
      }
    );

    this.techLocationFormGroupSubscription = this.techLocationFormGroup.valueChanges.subscribe(
      formChange => this.handleFormValueChange(formChange)
    );

    this.techLocationCriteriaChangeSubscription = this.searchService.onTechnologyLocationCriteriaChange.pipe()
      .debounceTime(1500)
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
}
