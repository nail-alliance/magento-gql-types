import { WishListUserInputError } from "./gql.wishListUserInputError";
import { Wishlist } from "./gql.wishlist";
export type CopyProductsBetweenWishlistsOutput = {
    destination_wishlist: Wishlist;
    source_wishlist: Wishlist;
    user_errors: WishListUserInputError[];
};
