import { Int } from "./gql.int";
import { SearchResultPageInfo } from "./gql.searchResultPageInfo";
import { CartItemInterface } from "./gql.cartItemInterface";
export type CartItems = {
    items: [CartItemInterface];
    page_info?: SearchResultPageInfo;
    total_count: Int;
};
