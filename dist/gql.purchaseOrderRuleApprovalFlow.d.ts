import { String } from "./gql.string";
import { PurchaseOrderApprovalFlowEvent } from "./gql.purchaseOrderApprovalFlowEvent";
export type PurchaseOrderRuleApprovalFlow = {
    events: PurchaseOrderApprovalFlowEvent[];
    rule_name: String;
};
