import { PurchaseOrderApprovalRuleStatus } from "./gql.purchaseOrderApprovalRuleStatus";
import { String } from "./gql.string";
import { CreatePurchaseOrderApprovalRuleConditionInput } from "./gql.createPurchaseOrderApprovalRuleConditionInput";
import { ID } from "./gql.ID";
export type PurchaseOrderApprovalRuleInput = {
    applies_to: ID[];
    approvers: ID[];
    condition: CreatePurchaseOrderApprovalRuleConditionInput;
    description?: String;
    name: String;
    status: PurchaseOrderApprovalRuleStatus;
};
