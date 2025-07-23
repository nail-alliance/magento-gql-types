import {PurchaseOrderStatus} from "./gql.purchaseOrderStatus";
import {FilterRangeTypeInput} from "./gql.filterRangeTypeInput";
import {Boolean} from "./gql.boolean";
export type PurchaseOrdersFilterInput = {
	company_purchase_orders?: Boolean // Include only purchase orders made by subordinate company users.
	created_date?: FilterRangeTypeInput // Filter by the creation date of the purchase order.
	require_my_approval?: Boolean // Include only purchase orders that are waiting for the customer’s approval.
	status?: PurchaseOrderStatus // Filter by the status of the purchase order.
}