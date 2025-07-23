import {AvailableCurrency} from "./gql.availableCurrency";
import {CompanyRole} from "./gql.companyRole";
export type PurchaseOrderApprovalRuleMetadata = {
	available_applies_to: CompanyRole[] // A list of B2B user roles that the rule can be applied to.
	available_condition_currencies: AvailableCurrency[] // A list of currencies that can be used to create approval rules based on amounts, for example shipping cost rules.
	available_requires_approval_from: CompanyRole[] // A list of B2B user roles that can be specified as approvers for the approval rules.
}