import {Boolean} from "./gql.boolean";
import {Money} from "./gql.money";
import {CustomerStoreCreditHistory} from "./gql.customerStoreCreditHistory";
export type CustomerStoreCredit = {
	balance_history?: CustomerStoreCreditHistory // Contains the customer's store credit balance history. If the history or store credit feature is disabled, then a null value will be returned.
	current_balance?: Money // The current balance of store credit.
	enabled?: Boolean // Indicates whether store credits are enabled. If the feature is disabled, then the balance will not be returned.
}