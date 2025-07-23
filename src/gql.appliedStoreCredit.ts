import {Boolean} from "./gql.boolean";
import {Money} from "./gql.money";
export type AppliedStoreCredit = {
	applied_balance?: Money // The applied store credit balance to the current cart.
	current_balance?: Money // The current balance remaining on store credit.
	enabled?: Boolean // Indicates whether store credits are enabled. If the feature is disabled, then the current balance will not be returned.
}