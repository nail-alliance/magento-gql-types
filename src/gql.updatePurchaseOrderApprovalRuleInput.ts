import {PurchaseOrderApprovalRuleStatus} from "./gql.purchaseOrderApprovalRuleStatus";
import {String} from "./gql.string";
import {CreatePurchaseOrderApprovalRuleConditionInput} from "./gql.createPurchaseOrderApprovalRuleConditionInput";
import {ID} from "./gql.ID";
export type UpdatePurchaseOrderApprovalRuleInput = {
	applies_to?: [ID] // An updated list of company user role IDs to which this purchase order approval rule should be applied. When an empty array is provided, the rule is applied to all user roles in the system, including those created in the future.
	approvers?: [ID] // An updated list of B2B user roles that can approve this purchase order approval rule.
	condition?: CreatePurchaseOrderApprovalRuleConditionInput // The updated condition of the purchase order approval rule.
	description?: String // The updated approval rule description.
	name?: String // The updated approval rule name.
	status?: PurchaseOrderApprovalRuleStatus // The updated status of the purchase order approval rule.
	uid: ID // Unique identifier for the purchase order approval rule.
}