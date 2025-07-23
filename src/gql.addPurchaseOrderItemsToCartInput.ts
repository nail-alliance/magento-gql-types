import {Boolean} from "./gql.boolean";
import {ID} from "./gql.ID";
import {String} from "./gql.string";
export type AddPurchaseOrderItemsToCartInput = {
	cart_id: String // The ID to assign to the cart.
	purchase_order_uid: ID // Purchase order unique ID.
	replace_existing_cart_items: Boolean // Replace existing cart or merge items.
}