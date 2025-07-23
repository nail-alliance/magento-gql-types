import {CompanyCreditOperationType} from "./gql.companyCreditOperationType";
import {String} from "./gql.string";
export type CompanyCreditHistoryFilterInput = {
	custom_reference_number?: String // The purchase order number associated with the company credit operation.
	operation_type?: CompanyCreditOperationType // The type of the company credit operation.
	updated_by?: String // The name of the person submitting the company credit operation.
}