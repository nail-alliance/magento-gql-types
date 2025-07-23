import {WishlistVisibilityEnum} from "./gql.wishlistVisibilityEnum";
import {ID} from "./gql.ID";
import {String} from "./gql.string";
export type UpdateWishlistOutput = {
	name: String // The wish list name.
	uid: ID // The unique ID of a Wishlist object.
	visibility: WishlistVisibilityEnum // Indicates whether the wish list is public or private.
}