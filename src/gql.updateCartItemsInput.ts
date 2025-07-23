import {CartItemUpdateInput} from "./gql.cartItemUpdateInput";
import {String} from "./gql.string";
export type UpdateCartItemsInput = {
	cart_id: String // The unique ID of a Cart object.
	cart_items: CartItemUpdateInput[] // An array of items to be updated.
}