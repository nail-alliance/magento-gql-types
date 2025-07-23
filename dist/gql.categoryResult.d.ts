import { Int } from "./gql.int";
import { SearchResultPageInfo } from "./gql.searchResultPageInfo";
import { CategoryTree } from "./gql.categoryTree";
export type CategoryResult = {
    items?: [CategoryTree];
    page_info?: SearchResultPageInfo;
    total_count?: Int;
};
