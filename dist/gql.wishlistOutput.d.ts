import { String } from "./gql.string";
import { Int } from "./gql.int";
import { WishlistItem } from "./gql.wishlistItem";
/** @deprecated */
export type WishlistOutput = {
    /** @deprecated */
    items?: [WishlistItem];
    /** @deprecated */
    items_count?: Int;
    /** @deprecated */
    name?: String;
    /** @deprecated */
    sharing_code?: String;
    /** @deprecated */
    updated_at?: String;
};
