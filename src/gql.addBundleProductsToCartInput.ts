import {BundleProductCartItemInput} from "./gql.bundleProductCartItemInput";
import {String} from "./gql.string";
export type AddBundleProductsToCartInput = {
	cart_id: String // The ID of the cart.
	cart_items: BundleProductCartItemInput[] // An array of bundle products to add.
}