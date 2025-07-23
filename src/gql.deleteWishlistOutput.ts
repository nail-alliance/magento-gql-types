import {Wishlist} from "./gql.wishlist";
import {Boolean} from "./gql.boolean";
export type DeleteWishlistOutput = {
	status: Boolean // Indicates whether the wish list was deleted.
	wishlists: [Wishlist] // A list of undeleted wish lists.
}