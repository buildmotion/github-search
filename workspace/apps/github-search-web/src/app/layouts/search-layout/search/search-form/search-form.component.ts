import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ComponentBase } from '@angularlicious/foundation';
import { AngularliciousLoggingService, Severity } from '@angularlicious/logging';
import { Router } from '@angular/router';
// tslint:disable-next-line: nx-enforce-module-boundaries
import { GithubSearchService } from 'apps/github-search-web/src/app/services/github-search/github-search.service';
import { environment } from 'apps/github-search-web/src/environments/environment';


@Component({
  selector: 'angularlicious-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent extends ComponentBase implements OnInit {
  searchCriteria: FormGroup;

  constructor(
    loggingService: AngularliciousLoggingService,
    router: Router,
    private formBuilder: FormBuilder,
    private searchService: GithubSearchService
  ) { 
    super('SearchFormComponent', loggingService, router);
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
  }

  onSubmit(criteria) {
    this.loggingService.log(this.componentName, Severity.Information, `Preparing to process search criteria: ${JSON.stringify(criteria.value)}`)

    // retrieve search criteria values and search GitHub using API
    const searchCriteria = {...criteria.value};
    this.searchService.searchGithub(searchCriteria);
  }

}
