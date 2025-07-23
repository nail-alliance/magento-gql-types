import {Float} from "./gql.float";
import {ID} from "./gql.ID";
import {SelectedCustomizableOption} from "./gql.selectedCustomizableOption";
import {ProductInterface} from "./gql.productInterface";
import {SelectedConfigurableOption} from "./gql.selectedConfigurableOption";
import {String} from "./gql.string";
export type ConfigurableWishlistItem = {
	added_at: String // The date and time the item was added to the wish list.
	/** @deprecated */
	child_sku: String // The SKU of the simple product corresponding to a set of selected configurable options. Use ConfigurableWishlistItem.configured_variant.sku instead. Deprecated
	configurable_options?: [SelectedConfigurableOption] // An array of selected configurable options.
	configured_variant?: ProductInterface // Product details of the selected variant. The value is null if some options are not configured.
	customizable_options: [SelectedCustomizableOption] // Custom options selected for the wish list item.
	description?: String // The description of the item.
	id: ID // The unique ID for a WishlistItemInterface object.
	product?: ProductInterface // Product details of the wish list item.
	quantity: Float // The quantity of this wish list item.
}