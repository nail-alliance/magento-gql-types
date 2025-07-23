import {SearchResultPageInfo} from "./gql.searchResultPageInfo";
import {WishlistItemInterface} from "./gql.wishlistItemInterface";
export type WishlistItems = {
	items: [WishlistItemInterface] // A list of items in the wish list.
	page_info?: SearchResultPageInfo // Contains pagination metadata.
}