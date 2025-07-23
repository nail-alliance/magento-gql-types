import { Wishlist } from "./gql.wishlist";
import { Boolean } from "./gql.boolean";
import { WishlistCartUserInputError } from "./gql.wishlistCartUserInputError";
export type AddWishlistItemsToCartOutput = {
    add_wishlist_items_to_cart_user_errors: WishlistCartUserInputError[];
    status: Boolean;
    wishlist: Wishlist;
};
