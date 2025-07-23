import { Wishlist } from "./gql.wishlist";
import { WishListUserInputError } from "./gql.wishListUserInputError";
export type UpdateProductsInWishlistOutput = {
    user_errors: [WishListUserInputError];
    wishlist: Wishlist;
};
