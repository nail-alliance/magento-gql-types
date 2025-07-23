import { PurchaseOrderApprovalRuleConditionOperator } from "./gql.purchaseOrderApprovalRuleConditionOperator";
import { PurchaseOrderApprovalRuleType } from "./gql.purchaseOrderApprovalRuleType";
import { Money } from "./gql.money";
export type PurchaseOrderApprovalRuleConditionAmount = {
    amount: Money;
    attribute?: PurchaseOrderApprovalRuleType;
    operator?: PurchaseOrderApprovalRuleConditionOperator;
};
