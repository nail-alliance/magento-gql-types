import {WishListUserInputError} from "./gql.wishListUserInputError";
import {Wishlist} from "./gql.wishlist";
export type CopyProductsBetweenWishlistsOutput = {
	destination_wishlist: Wishlist // The destination wish list containing the copied products.
	source_wishlist: Wishlist // The wish list that the products were copied from.
	user_errors: [WishListUserInputError] // An array of errors encountered while copying products in a wish list.
}