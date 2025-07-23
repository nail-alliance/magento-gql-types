import {Wishlist} from "./gql.wishlist";
import {Boolean} from "./gql.boolean";
import {WishlistCartUserInputError} from "./gql.wishlistCartUserInputError";
export type AddWishlistItemsToCartOutput = {
	add_wishlist_items_to_cart_user_errors: [WishlistCartUserInputError] // An array of errors encountered while adding products to the customer's cart.
	status: Boolean // Indicates whether the attempt to add items to the customer's cart was successful.
	wishlist: Wishlist // Contains the wish list with all items that were successfully added.
}