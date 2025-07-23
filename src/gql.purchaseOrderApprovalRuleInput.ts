import {PurchaseOrderApprovalRuleStatus} from "./gql.purchaseOrderApprovalRuleStatus";
import {String} from "./gql.string";
import {CreatePurchaseOrderApprovalRuleConditionInput} from "./gql.createPurchaseOrderApprovalRuleConditionInput";
import {ID} from "./gql.ID";
export type PurchaseOrderApprovalRuleInput = {
	applies_to: ID[] // A list of company user role IDs to which this purchase order approval rule should be applied. When an empty array is provided, the rule is applied to all user roles in the system, including those created in the future.
	approvers: ID[] // A list of B2B user roles that can approve this purchase order approval rule.
	condition: CreatePurchaseOrderApprovalRuleConditionInput // The condition of the purchase order approval rule.
	description?: String // A summary of the purpose of the purchase order approval rule.
	name: String // The purchase order approval rule name.
	status: PurchaseOrderApprovalRuleStatus // The status of the purchase order approval rule.
}