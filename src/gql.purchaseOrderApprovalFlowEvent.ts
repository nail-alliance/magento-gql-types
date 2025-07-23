import {PurchaseOrderApprovalFlowItemStatus} from "./gql.purchaseOrderApprovalFlowItemStatus";
import {String} from "./gql.string";
export type PurchaseOrderApprovalFlowEvent = {
	message?: String // A formatted message.
	name?: String // The approver name.
	role?: String // The approver role.
	status?: PurchaseOrderApprovalFlowItemStatus // The status related to the event.
	updated_at?: String // The date and time the event was updated.
}