import {WishlistVisibilityEnum} from "./gql.wishlistVisibilityEnum";
import {String} from "./gql.string";
export type CreateWishlistInput = {
	name: String // The name of the new wish list.
	visibility: WishlistVisibilityEnum // Indicates whether the wish list is public or private.
}