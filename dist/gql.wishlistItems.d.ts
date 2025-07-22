import { WishlistItemInterface } from "./gql.wishlistItemInterface";
import { SearchResultPageInfo } from "./gql.searchResultPageInfo";
export type WishlistItems = {
    "items": WishlistItemInterface[];
    "page_info"?: SearchResultPageInfo | null | undefined;
};
