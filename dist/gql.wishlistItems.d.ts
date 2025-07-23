import { SearchResultPageInfo } from "./gql.searchResultPageInfo";
import { WishlistItemInterface } from "./gql.wishlistItemInterface";
export type WishlistItems = {
    items: [WishlistItemInterface];
    page_info?: SearchResultPageInfo;
};
