import {PurchaseOrderErrorType} from "./gql.purchaseOrderErrorType";
import {String} from "./gql.string";
export type PurchaseOrderActionError = {
	message: String // The returned error message.
	type: PurchaseOrderErrorType // The error type.
}