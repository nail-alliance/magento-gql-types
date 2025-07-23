import { Wishlist } from "./gql.wishlist";
import { WishListUserInputError } from "./gql.wishListUserInputError";
export type AddProductsToWishlistOutput = {
    user_errors: [WishListUserInputError];
    wishlist: Wishlist;
};
