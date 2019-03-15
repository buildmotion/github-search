import { ActionBase } from "@angularlicious/foundation";
import { BusinessProviderService } from "../business-provider.service";
import { AngularliciousLoggingService } from "@angularlicious/logging";

export class GithubSearchActionBase extends ActionBase {

    businessProvider: BusinessProviderService;
    loggingService: AngularliciousLoggingService;

    constructor() {
        super();
    }

    /**
     * Use the [Do] method to perform the specified action. Note that we are using
     * inversion of control in this method to provide each action with shared objects that
     * participate in the entire service request.
     * 
     * @param businessProvider The business provide for the service. Use to coordinate other
     * business action processing.
     */
    Do(businessProvider: BusinessProviderService) {
        this.businessProvider = businessProvider;
        this.serviceContext = businessProvider.serviceContext;
        this.loggingService = businessProvider.loggingService;

        // The [execute()] method starts the pipeline of the business action.
        this.execute();
    }
}
