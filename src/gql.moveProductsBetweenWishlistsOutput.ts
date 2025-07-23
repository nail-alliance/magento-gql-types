import {WishListUserInputError} from "./gql.wishListUserInputError";
import {Wishlist} from "./gql.wishlist";
export type MoveProductsBetweenWishlistsOutput = {
	destination_wishlist: Wishlist // The destination wish list after receiving products moved from the source wish list.
	source_wishlist: Wishlist // The source wish list after moving products from it.
	user_errors: [WishListUserInputError] // An array of errors encountered while moving products to a wish list.
}