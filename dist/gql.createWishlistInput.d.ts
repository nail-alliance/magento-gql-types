import { WishlistVisibilityEnum } from "./gql.wishlistVisibilityEnum";
import { String } from "./gql.string";
export type CreateWishlistInput = {
    name: String;
    visibility: WishlistVisibilityEnum;
};
