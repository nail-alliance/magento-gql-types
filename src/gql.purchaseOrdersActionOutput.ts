import {PurchaseOrder} from "./gql.purchaseOrder";
import {PurchaseOrderActionError} from "./gql.purchaseOrderActionError";
export type PurchaseOrdersActionOutput = {
	errors: PurchaseOrderActionError[] // An array of error messages encountered while performing the operation.
	purchase_orders: PurchaseOrder[] // A list of purchase orders.
}