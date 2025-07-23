import {String} from "./gql.string";
import {Int} from "./gql.int";
import {WishlistItem} from "./gql.wishlistItem";
/** @deprecated */
export type WishlistOutput = {
	/** @deprecated */
	items?: WishlistItem[] // An array of items in the customer's wish list Use the Wishlist.items field instead. Deprecated
	/** @deprecated */
	items_count?: Int // The number of items in the wish list. Use the Wishlist.items_count field instead. Deprecated
	/** @deprecated */
	name?: String // When multiple wish lists are enabled, the name the customer assigns to the wishlist. This field is related to Commerce functionality and is always null in Open Source. Deprecated
	/** @deprecated */
	sharing_code?: String // An encrypted code that links to the wish list. Use the Wishlist.sharing_code field instead. Deprecated
	/** @deprecated */
	updated_at?: String // The time of the last modification to the wish list. Use the Wishlist.updated_at field instead. Deprecated
}