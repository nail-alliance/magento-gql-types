import {PurchaseOrderApprovalFlowItemStatus} from "./gql.purchaseOrderApprovalFlowItemStatus";

export type PurchaseOrderApprovalFlowEvent = {
    "message"?: string | null | undefined
    "name"?: string | null | undefined
    "role"?: string | null | undefined
    "status": PurchaseOrderApprovalFlowItemStatus
    "updated_at"?: string | null | undefined
}