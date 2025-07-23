import {CompanyCreditOperationUser} from "./gql.companyCreditOperationUser";
import {CompanyCreditOperationType} from "./gql.companyCreditOperationType";
import {String} from "./gql.string";
import {CompanyCredit} from "./gql.companyCredit";
import {Money} from "./gql.money";
export type CompanyCreditOperation = {
	amount?: Money // The amount of the company credit operation.
	balance: CompanyCredit // The credit balance as a result of the operation.
	custom_reference_number?: String // The purchase order number associated with the company credit operation.
	date: String // The date the operation occurred.
	type: CompanyCreditOperationType // The type of the company credit operation.
	updated_by: CompanyCreditOperationUser // The company user that submitted the company credit operation.
}