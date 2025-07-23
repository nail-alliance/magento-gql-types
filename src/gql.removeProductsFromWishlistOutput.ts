import {Wishlist} from "./gql.wishlist";
import {WishListUserInputError} from "./gql.wishListUserInputError";
export type RemoveProductsFromWishlistOutput = {
	user_errors: [WishListUserInputError] // An array of errors encountered while deleting products from a wish list.
	wishlist: Wishlist // Contains the wish list with after items were successfully deleted.
}