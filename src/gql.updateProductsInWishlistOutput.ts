import {Wishlist} from "./gql.wishlist";
import {WishListUserInputError} from "./gql.wishListUserInputError";
export type UpdateProductsInWishlistOutput = {
	user_errors: WishListUserInputError[] // An array of errors encountered while updating products in a wish list.
	wishlist: Wishlist // Contains the wish list with all items that were successfully updated.
}