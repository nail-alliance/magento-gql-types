import {ID} from "./gql.ID";
import {WishlistItem} from "./gql.wishlistItem";
import {WishlistItems} from "./gql.wishlistItems";
import {WishlistVisibilityEnum} from "./gql.wishlistVisibilityEnum";

export type Wishlist = {
    "id"?: ID | null | undefined
    /** @deprecated */
    "items"?: WishlistItem[] | null | undefined
    "items_count": number
    "items_v2": WishlistItems
    "name"?: string | null | undefined
    "sharing_code"?: string | null | undefined
    "updated_at"?: string | null | undefined
    "visibility": WishlistVisibilityEnum
}