import {Float} from "./gql.float";
import {Int} from "./gql.int";
/** @deprecated */
export type CartItemQuantity = {
	/** @deprecated */
	cart_item_id: Int // The ShippingCartAddress.cart_items field now returns CartItemInterface. Deprecated
	/** @deprecated */
	quantity: Float // The ShippingCartAddress.cart_items field now returns CartItemInterface. Deprecated
}