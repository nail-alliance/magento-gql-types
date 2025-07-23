import { WishListUserInputError } from "./gql.wishListUserInputError";
import { Wishlist } from "./gql.wishlist";
export type MoveProductsBetweenWishlistsOutput = {
    destination_wishlist: Wishlist;
    source_wishlist: Wishlist;
    user_errors: WishListUserInputError[];
};
