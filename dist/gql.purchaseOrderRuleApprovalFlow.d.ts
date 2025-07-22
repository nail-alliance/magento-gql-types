import { PurchaseOrderApprovalFlowEvent } from "./gql.purchaseOrderApprovalFlowEvent";
export type PurchaseOrderRuleApprovalFlow = {
    "events": PurchaseOrderApprovalFlowEvent[];
    "rule_name": string;
};
