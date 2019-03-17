import * as rules from '@angularlicious/rules-engine';
import { Severity } from '@angularlicious/logging';
import { GithubSearchActionBase } from './github-search-action-base';
import { TechLocationCriteria } from './../../../../layouts/search-layout/models/i-tech-location.model';

export class SearchTechLocationAction extends GithubSearchActionBase {
  displayRuleViolations = true;
  doNotDisplayRuleViolations = false;
  displayToUser = true;
  doNotDisplayToUser = false;

  constructor(private searchCriteria: TechLocationCriteria) {
    super();
    this.actionName = 'SearchTechLocationAction';
  }

  /**
   * Override this method from the base [Action] class to allow for rules to be added to the
   * action's [ValidationContext]. Any rules added to the [ValidationContext] here will be executed when
   * the action's [ValidateAction] method is called - this method is just one of many pipeline methods
   * of the [Action] framework.
   */
  preValidateAction() {
    this.loggingService.log(
      this.actionName,
      Severity.Information,
      `Preparing to setup rules in the [preValidateAction] method for the ${
      this.actionName
      } action.`
    );

    // the search criteria must include valid search values.
    this.validationContext
      .addRule(
        new rules.IsNotNullOrUndefined(
          'SearchCriteriaIsNotNull',
          'The search criteria is not valid.',
          this.searchCriteria,
          this.displayRuleViolations
        )
      )
      .addRule(
        new rules.StringIsNotNullEmptyRange(
          'TechnologyIsValid',
          'The technology value is not valid. Cannot be null or empty value.',
          this.searchCriteria.technology,
          1,
          80,
          this.displayRuleViolations
        )
      )
      .addRule(
        new rules.StringIsNotNullEmptyRange(
          'LocationIsValid',
          'The location is not valid - must be within 2 and 35 characters.',
          this.searchCriteria.location,
          2,
          35,
          this.displayRuleViolations
        )
      );
  }

  /**
   * Use this method to provide business logic implementation - this method is allowed to execute only if the current action
   * does not contain any rule violations.
   */
  performAction() {
    this.loggingService.log(this.actionName, Severity.Information, `Running the [performAction] for the ${this.actionName}.`);
    this.response = this.businessProvider.githubApiService.searchTechLocation(this.searchCriteria);
  }
}
