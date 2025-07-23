import {String} from "./gql.string";
export type SyncPaymentOrderInput = {
	cartId: String // The customer cart ID
	id: String // PayPal order ID
}