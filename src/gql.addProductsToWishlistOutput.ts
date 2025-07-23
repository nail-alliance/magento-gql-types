import {Wishlist} from "./gql.wishlist";
import {WishListUserInputError} from "./gql.wishListUserInputError";
export type AddProductsToWishlistOutput = {
	user_errors: WishListUserInputError[] // An array of errors encountered while adding products to a wish list.
	wishlist: Wishlist // Contains the wish list with all items that were successfully added.
}