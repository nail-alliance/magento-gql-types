import { Wishlist } from "./gql.wishlist";
import { Boolean } from "./gql.boolean";
export type DeleteWishlistOutput = {
    status: Boolean;
    wishlists: Wishlist[];
};
