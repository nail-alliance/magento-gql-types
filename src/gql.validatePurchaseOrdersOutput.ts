import {PurchaseOrder} from "./gql.purchaseOrder";
import {ValidatePurchaseOrderError} from "./gql.validatePurchaseOrderError";
export type ValidatePurchaseOrdersOutput = {
	errors: ValidatePurchaseOrderError[] // An array of error messages encountered while performing the operation.
	purchase_orders: PurchaseOrder[] // An array of the purchase orders in the request.
}