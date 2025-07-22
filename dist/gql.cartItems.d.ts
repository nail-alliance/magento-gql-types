import { CartItemInterface } from "./gql.cartItemInterface";
import { SearchResultPageInfo } from "./gql.searchResultPageInfo";
export type CartItems = {
    "items": CartItemInterface[];
    "page_info"?: SearchResultPageInfo | null | undefined;
    "total_count": number;
};
