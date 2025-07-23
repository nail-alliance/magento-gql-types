import {Money} from "./gql.money";
import {String} from "./gql.string";
export type CustomerStoreCreditHistoryItem = {
	action?: String // The action that was made on the store credit.
	actual_balance?: Money // The store credit available to the customer as a result of this action.
	balance_change?: Money // The amount added to or subtracted from the store credit as a result of this action.
	date_time_changed?: String // The date and time when the store credit change was made.
}