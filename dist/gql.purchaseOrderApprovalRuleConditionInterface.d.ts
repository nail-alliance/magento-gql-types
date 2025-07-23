import { PurchaseOrderApprovalRuleConditionOperator } from "./gql.purchaseOrderApprovalRuleConditionOperator";
import { PurchaseOrderApprovalRuleType } from "./gql.purchaseOrderApprovalRuleType";
export interface PurchaseOrderApprovalRuleConditionInterface {
    attribute?: PurchaseOrderApprovalRuleType;
    operator?: PurchaseOrderApprovalRuleConditionOperator;
}
