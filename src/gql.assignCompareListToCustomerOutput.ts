import {Boolean} from "./gql.boolean";
import {CompareList} from "./gql.compareList";
export type AssignCompareListToCustomerOutput = {
	compare_list?: CompareList // The contents of the customer's compare list.
	result: Boolean // Indicates whether the compare list was successfully assigned to the customer.
}