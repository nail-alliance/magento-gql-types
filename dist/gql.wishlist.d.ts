import { WishlistVisibilityEnum } from "./gql.wishlistVisibilityEnum";
import { String } from "./gql.string";
import { WishlistItems } from "./gql.wishlistItems";
import { Int } from "./gql.int";
import { WishlistItem } from "./gql.wishlistItem";
import { ID } from "./gql.ID";
export type Wishlist = {
    id?: ID;
    /** @deprecated */
    items?: WishlistItem[];
    items_count?: Int;
    items_v2?: WishlistItems;
    name?: String;
    sharing_code?: String;
    updated_at?: String;
    visibility: WishlistVisibilityEnum;
};
