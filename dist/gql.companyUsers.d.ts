import { Int } from "./gql.int";
import { SearchResultPageInfo } from "./gql.searchResultPageInfo";
import { Customer } from "./gql.customer";
export type CompanyUsers = {
    items: [Customer];
    page_info?: SearchResultPageInfo;
    total_count: Int;
};
