import {PurchaseOrderApprovalRuleConditionOperator} from "./gql.purchaseOrderApprovalRuleConditionOperator";
import {PurchaseOrderApprovalRuleType} from "./gql.purchaseOrderApprovalRuleType";
export interface PurchaseOrderApprovalRuleConditionInterface {
	attribute?: PurchaseOrderApprovalRuleType // The type of purchase order approval rule.
	operator?: PurchaseOrderApprovalRuleConditionOperator // The operator to be used for evaluating the approval rule condition.
}