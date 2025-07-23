import {ID} from "./gql.ID";
import {String} from "./gql.string";
import {Boolean} from "./gql.boolean";
import {PriceRange} from "./gql.priceRange";
import {BundleItemOption} from "./gql.bundleItemOption";
import {Int} from "./gql.int";
export type BundleItem = {
	/** @deprecated */
	option_id?: Int // Deprecated An ID assigned to each type of item in a bundle product. Use uid instead
	options?: [BundleItemOption] // An array of additional options for this bundle item.
	position?: Int // A number indicating the sequence order of this item compared to the other bundle items.
	price_range: PriceRange // The range of prices for the product
	required?: Boolean // Indicates whether the item must be included in the bundle.
	sku?: String // The SKU of the bundle product.
	title?: String // The display name of the item.
	type?: String // The input type that the customer uses to select the item. Examples include radio button and checkbox.
	uid?: ID // The unique ID for a BundleItem object.
}