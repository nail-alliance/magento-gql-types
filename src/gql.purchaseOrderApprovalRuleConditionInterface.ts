import {PurchaseOrderApprovalRuleType} from "./gql.purchaseOrderApprovalRuleType";
import {
    PurchaseOrderApprovalRuleConditionOperator
} from "./gql.purchaseOrderApprovalRuleConditionOperator";

export interface PurchaseOrderApprovalRuleConditionInterface {
    "attribute": PurchaseOrderApprovalRuleType
    "operator": PurchaseOrderApprovalRuleConditionOperator
}