import {VirtualProductCartItemInput} from "./gql.virtualProductCartItemInput";
import {String} from "./gql.string";
export type AddVirtualProductsToCartInput = {
	cart_id: String // The unique ID of a Cart object.
	cart_items: VirtualProductCartItemInput[] // An array of virtual products to add.
}