import { CustomerStoreCreditHistoryItem } from "./gql.customerStoreCreditHistoryItem";
import { SearchResultPageInfo } from "./gql.searchResultPageInfo";
export type CustomerStoreCreditHistory = {
    "items": CustomerStoreCreditHistoryItem[];
    "page_info"?: SearchResultPageInfo | null | undefined;
    "total_count"?: number | null | undefined;
};
