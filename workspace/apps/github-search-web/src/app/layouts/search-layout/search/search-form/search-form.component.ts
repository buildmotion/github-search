import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ComponentBase } from '@angularlicious/foundation';
import { AngularliciousLoggingService, Severity } from '@angularlicious/logging';
import { Router } from '@angular/router';


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
    private formBuilder: FormBuilder
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
    
  }

}
