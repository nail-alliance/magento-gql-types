import {CompanyCreditOperationUserType} from "./gql.companyCreditOperationUserType";
import {String} from "./gql.string";
export type CompanyCreditOperationUser = {
	name: String // The name of the company user submitting the company credit operation.
	type: CompanyCreditOperationUserType // The type of the company user submitting the company credit operation.
}