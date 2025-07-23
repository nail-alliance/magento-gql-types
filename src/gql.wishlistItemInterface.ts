import {Float} from "./gql.float";
import {ProductInterface} from "./gql.productInterface";
import {ID} from "./gql.ID";
import {SelectedCustomizableOption} from "./gql.selectedCustomizableOption";
import {String} from "./gql.string";
export interface WishlistItemInterface {
	added_at: String // The date and time the item was added to the wish list.
	customizable_options: SelectedCustomizableOption[] // Custom options selected for the wish list item.
	description?: String // The description of the item.
	id: ID // The unique ID for a WishlistItemInterface object.
	product?: ProductInterface // Product details of the wish list item.
	quantity: Float // The quantity of this wish list item.
}