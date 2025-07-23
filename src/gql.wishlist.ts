import {WishlistVisibilityEnum} from "./gql.wishlistVisibilityEnum";
import {String} from "./gql.string";
import {WishlistItems} from "./gql.wishlistItems";
import {Int} from "./gql.int";
import {WishlistItem} from "./gql.wishlistItem";
import {ID} from "./gql.ID";
export type Wishlist = {
	id?: ID // The unique ID for a Wishlist object.
	/** @deprecated */
	items?: WishlistItem[] // Use the items_v2 field instead. Deprecated
	items_count?: Int // The number of items in the wish list.
	items_v2?: WishlistItems // An array of items in the customer's wish list.
	name?: String // The name of the wish list.
	sharing_code?: String // An encrypted code that Magento uses to link to the wish list.
	updated_at?: String // The time of the last modification to the wish list.
	visibility: WishlistVisibilityEnum // Indicates whether the wish list is public or private.
}