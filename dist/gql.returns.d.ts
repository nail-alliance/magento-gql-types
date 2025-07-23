import { Int } from "./gql.int";
import { SearchResultPageInfo } from "./gql.searchResultPageInfo";
import { Return } from "./gql.return";
export type Returns = {
    items?: [Return];
    page_info?: SearchResultPageInfo;
    total_count?: Int;
};
