import { PurchaseOrderApprovalFlowItemStatus } from "./gql.purchaseOrderApprovalFlowItemStatus";
import { String } from "./gql.string";
export type PurchaseOrderApprovalFlowEvent = {
    message?: String;
    name?: String;
    role?: String;
    status?: PurchaseOrderApprovalFlowItemStatus;
    updated_at?: String;
};
