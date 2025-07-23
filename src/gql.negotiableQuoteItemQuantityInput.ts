import {ID} from "./gql.ID";
import {Float} from "./gql.float";
export type NegotiableQuoteItemQuantityInput = {
	quantity: Float // The new quantity of the negotiable quote item.
	quote_item_uid: ID // The unique ID of a CartItemInterface object.
}