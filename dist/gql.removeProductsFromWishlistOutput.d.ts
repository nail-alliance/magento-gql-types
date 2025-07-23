import { Wishlist } from "./gql.wishlist";
import { WishListUserInputError } from "./gql.wishListUserInputError";
export type RemoveProductsFromWishlistOutput = {
    user_errors: WishListUserInputError[];
    wishlist: Wishlist;
};
