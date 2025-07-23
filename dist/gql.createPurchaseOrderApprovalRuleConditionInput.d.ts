import { Int } from "./gql.int";
import { PurchaseOrderApprovalRuleConditionOperator } from "./gql.purchaseOrderApprovalRuleConditionOperator";
import { PurchaseOrderApprovalRuleType } from "./gql.purchaseOrderApprovalRuleType";
import { CreatePurchaseOrderApprovalRuleConditionAmountInput } from "./gql.createPurchaseOrderApprovalRuleConditionAmountInput";
export type CreatePurchaseOrderApprovalRuleConditionInput = {
    amount?: CreatePurchaseOrderApprovalRuleConditionAmountInput;
    attribute: PurchaseOrderApprovalRuleType;
    operator: PurchaseOrderApprovalRuleConditionOperator;
    quantity?: Int;
};
