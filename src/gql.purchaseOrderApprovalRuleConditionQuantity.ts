import {Int} from "./gql.int";
import {PurchaseOrderApprovalRuleConditionOperator} from "./gql.purchaseOrderApprovalRuleConditionOperator";
import {PurchaseOrderApprovalRuleType} from "./gql.purchaseOrderApprovalRuleType";
export type PurchaseOrderApprovalRuleConditionQuantity = {
	attribute?: PurchaseOrderApprovalRuleType // The type of purchase order approval rule.
	operator?: PurchaseOrderApprovalRuleConditionOperator // The operator to be used for evaluating the approval rule condition.
	quantity?: Int // The quantity to be used for evaluation of the approval rule condition.
}