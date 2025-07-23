import {Float} from "./gql.float";
import {ProductInterface} from "./gql.productInterface";
import {Int} from "./gql.int";
import {String} from "./gql.string";
export type WishlistItem = {
	added_at?: String // The time when the customer added the item to the wish list.
	description?: String // The customer's comment about this item.
	id?: Int // The unique ID for a WishlistItem object.
	product?: ProductInterface // Details about the wish list item.
	qty?: Float // The quantity of this wish list item
}