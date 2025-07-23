import {DownloadableProductCartItemInput} from "./gql.downloadableProductCartItemInput";
import {String} from "./gql.string";
export type AddDownloadableProductsToCartInput = {
	cart_id: String // The ID of the cart.
	cart_items: [DownloadableProductCartItemInput] // An array of downloadable products to add.
}