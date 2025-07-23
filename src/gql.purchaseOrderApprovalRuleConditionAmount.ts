import {PurchaseOrderApprovalRuleConditionOperator} from "./gql.purchaseOrderApprovalRuleConditionOperator";
import {PurchaseOrderApprovalRuleType} from "./gql.purchaseOrderApprovalRuleType";
import {Money} from "./gql.money";
export type PurchaseOrderApprovalRuleConditionAmount = {
	amount: Money // The amount to be be used for evaluation of the approval rule condition.
	attribute?: PurchaseOrderApprovalRuleType // The type of purchase order approval rule.
	operator?: PurchaseOrderApprovalRuleConditionOperator // The operator to be used for evaluating the approval rule condition.
}