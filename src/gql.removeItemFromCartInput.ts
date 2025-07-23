import {ID} from "./gql.ID";
import {Int} from "./gql.int";
import {String} from "./gql.string";
export type RemoveItemFromCartInput = {
	cart_id: String // The unique ID of a Cart object.
	/** @deprecated */
	cart_item_id?: Int // Deprecated. Use cart_item_uid instead. Deprecated
	cart_item_uid?: ID // Required field. The unique ID for a CartItemInterface object.
}