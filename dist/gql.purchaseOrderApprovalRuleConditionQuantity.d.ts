import { Int } from "./gql.int";
import { PurchaseOrderApprovalRuleConditionOperator } from "./gql.purchaseOrderApprovalRuleConditionOperator";
import { PurchaseOrderApprovalRuleType } from "./gql.purchaseOrderApprovalRuleType";
export type PurchaseOrderApprovalRuleConditionQuantity = {
    attribute?: PurchaseOrderApprovalRuleType;
    operator?: PurchaseOrderApprovalRuleConditionOperator;
    quantity?: Int;
};
