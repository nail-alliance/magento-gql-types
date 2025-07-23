import {ID} from "./gql.ID";
import {DownloadableProductSamples} from "./gql.downloadableProductSamples";
import {ProductInterface} from "./gql.productInterface";
import {CartItemPrices} from "./gql.cartItemPrices";
import {ItemNote} from "./gql.itemNote";
import {Float} from "./gql.float";
import {DownloadableProductLinks} from "./gql.downloadableProductLinks";
import {Boolean} from "./gql.boolean";
import {String} from "./gql.string";
import {CartItemError} from "./gql.cartItemError";
import {Discount} from "./gql.discount";
import {SelectedCustomizableOption} from "./gql.selectedCustomizableOption";
export type DownloadableCartItem = {
	customizable_options: SelectedCustomizableOption[] // An array containing the customizable options the shopper selected.
	discount?: Discount[] // Contains discount for quote line item.
	errors?: CartItemError[] // An array of errors encountered while loading the cart item
	/** @deprecated */
	id: String // Use uid instead. Deprecated
	is_available: Boolean // True if requested quantity is less than available stock, false otherwise.
	links?: DownloadableProductLinks[] // An array containing information about the links for the downloadable product added to the cart.
	max_qty?: Float // Line item max qty in quote template
	min_qty?: Float // Line item min qty in quote template
	not_available_message?: String // Message to display when the product is not available with this selected option.
	note_from_buyer?: ItemNote[] // The buyer's quote line item note.
	note_from_seller?: ItemNote[] // The seller's quote line item note.
	prices?: CartItemPrices // Contains details about the price of the item, including taxes and discounts.
	product: ProductInterface // Details about an item in the cart.
	quantity: Float // The quantity of this item in the cart.
	samples?: DownloadableProductSamples[] // An array containing information about samples of the selected downloadable product.
	uid: ID // The unique ID for a CartItemInterface object.
}