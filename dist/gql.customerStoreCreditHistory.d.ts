import { Int } from "./gql.int";
import { SearchResultPageInfo } from "./gql.searchResultPageInfo";
import { CustomerStoreCreditHistoryItem } from "./gql.customerStoreCreditHistoryItem";
export type CustomerStoreCreditHistory = {
    items?: CustomerStoreCreditHistoryItem[];
    page_info?: SearchResultPageInfo;
    total_count?: Int;
};
