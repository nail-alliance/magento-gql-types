import { Return } from "./gql.return";
import { SearchResultPageInfo } from "./gql.searchResultPageInfo";
export type Returns = {
    "items"?: Return[] | null | undefined;
    "page_info"?: SearchResultPageInfo | null | undefined;
    "total_count"?: number | null | undefined;
};
