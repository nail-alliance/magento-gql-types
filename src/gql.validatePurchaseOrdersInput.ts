import {ID} from "./gql.ID";
export type ValidatePurchaseOrdersInput = {
	purchase_order_uids: [ID] // An array of the purchase order IDs.
}