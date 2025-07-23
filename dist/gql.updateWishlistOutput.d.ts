import { WishlistVisibilityEnum } from "./gql.wishlistVisibilityEnum";
import { ID } from "./gql.ID";
import { String } from "./gql.string";
export type UpdateWishlistOutput = {
    name: String;
    uid: ID;
    visibility: WishlistVisibilityEnum;
};
