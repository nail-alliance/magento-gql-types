import {ID} from "./gql.ID";
import {PurchaseOrderStatus} from "./gql.purchaseOrderStatus";
import {Cart} from "./gql.cart";
import {CustomerOrder} from "./gql.customerOrder";
import {PurchaseOrderHistoryItem} from "./gql.purchaseOrderHistoryItem";
import {Customer} from "./gql.customer";
import {String} from "./gql.string";
import {PurchaseOrderComment} from "./gql.purchaseOrderComment";
import {PurchaseOrderAction} from "./gql.purchaseOrderAction";
import {PurchaseOrderRuleApprovalFlow} from "./gql.purchaseOrderRuleApprovalFlow";
export type PurchaseOrder = {
	approval_flow: PurchaseOrderRuleApprovalFlow[] // The approval flows for each applied rules.
	available_actions: PurchaseOrderAction[] // Purchase order actions available to the customer. Can be used to display action buttons on the client.
	comments: PurchaseOrderComment[] // The set of comments applied to the purchase order.
	created_at: String // The date the purchase order was created.
	created_by?: Customer // The company user who created the purchase order.
	history_log: PurchaseOrderHistoryItem[] // The log of the events related to the purchase order.
	number: String // The purchase order number.
	order?: CustomerOrder // The reference to the order placed based on the purchase order.
	quote?: Cart // The quote related to the purchase order.
	status: PurchaseOrderStatus // The current status of the purchase order.
	uid: ID // A unique identifier for the purchase order.
	updated_at: String // The date the purchase order was last updated.
}