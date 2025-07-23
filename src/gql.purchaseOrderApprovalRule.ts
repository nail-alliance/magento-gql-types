import {ID} from "./gql.ID";
import {PurchaseOrderApprovalRuleStatus} from "./gql.purchaseOrderApprovalRuleStatus";
import {String} from "./gql.string";
import {PurchaseOrderApprovalRuleConditionInterface} from "./gql.purchaseOrderApprovalRuleConditionInterface";
import {CompanyRole} from "./gql.companyRole";
export type PurchaseOrderApprovalRule = {
	applies_to_roles: CompanyRole[] // The name of the user(s) affected by the the purchase order approval rule.
	approver_roles: CompanyRole[] // The name of the user who needs to approve purchase orders that trigger the approval rule.
	condition?: PurchaseOrderApprovalRuleConditionInterface // Condition which triggers the approval rule.
	created_at: String // The date the purchase order rule was created.
	created_by: String // The name of the user who created the purchase order approval rule.
	description?: String // Description of the purchase order approval rule.
	name: String // The name of the purchase order approval rule.
	status: PurchaseOrderApprovalRuleStatus // The status of the purchase order approval rule.
	uid: ID // The unique identifier for the purchase order approval rule.
	updated_at: String // The date the purchase order rule was last updated.
}