import {Float} from "./gql.float";
import {GiftMessageInput} from "./gql.giftMessageInput";
import {CustomizableOptionInput} from "./gql.customizableOptionInput";
import {ID} from "./gql.ID";
import {Int} from "./gql.int";
export type CartItemUpdateInput = {
	/** @deprecated */
	cart_item_id?: Int // Deprecated. Use cart_item_uid instead.
	cart_item_uid?: ID // The unique ID for a CartItemInterface object.
	customizable_options?: [CustomizableOptionInput] // An array that defines customizable options for the product.
	gift_message?: GiftMessageInput // Gift message details for the cart item
	gift_wrapping_id?: ID // The unique ID for a GiftWrapping object to be used for the cart item.
	quantity?: Float // The new quantity of the item.
}