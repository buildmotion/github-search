
import * as rules from '@angularlicious/rules-engine';
import { Severity } from '@angularlicious/logging';
import { GithubSearchActionBase } from './github-search-action-base';
import { SearchCriteria } from './../../../../layouts/search-layout/models/i-search-criteria.model';

export class SearchGithubAction extends GithubSearchActionBase {

  displayRuleViolations = true;
  doNotDisplayRuleViolations = false;
  displayToUser = true;
  doNotDisplayToUser = false;

  constructor(
    private searchCriteria: SearchCriteria) {
    super();
    this.actionName = 'SearchGithubAction';
  }

  /**
   * Override this method from the base [Action] class to allow for rules to be added to the
   * action's [ValidationContext]. Any rules added to the [ValidationContext] here will be executed when
   * the action's [ValidateAction] method is called - this method is just one of many pipeline methods
   * of the [Action] framework.
   */
  preValidateAction() {
    this.loggingService.log(this.actionName, Severity.Information, `Preparing to setup rules in the [preValidateAction] method for the ${this.actionName} action.`);

    // the search criteria must include valid search values.
    this.validationContext.addRule(new rules.StringIsNotNullEmptyRange(
      'OwnerNameIsValid',
      'The repository name is not valid - must be within 2 and 40 characters.',
      this.searchCriteria.repositoryName,
      2,
      40,
      this.displayToUser
    )).addRule(
      new rules.Range(
        'ItemsPerPageIsValid',
        'The items per page value must be within 1 and 100.',
        this.searchCriteria.itemsPerPage,
        1,
        100,
        this.displayToUser
      )
    );
  }

  /**
   * Use this method to provide business logic implementation - this method is allowed to execute only if the current action
   * does not contain any rule violations.
   */
  performAction() {
    this.loggingService.log(this.actionName, Severity.Information, `Running the [performAction] for the ${this.actionName}.`);
    this.response = this.businessProvider.githubApiService.searchRepositories(this.searchCriteria);
  }
}