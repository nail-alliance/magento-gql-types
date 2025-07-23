import { Int } from "./gql.int";
import { SearchResultPageInfo } from "./gql.searchResultPageInfo";
import { ProductInterface } from "./gql.productInterface";
export type CategoryProducts = {
    items?: ProductInterface[];
    page_info?: SearchResultPageInfo;
    total_count?: Int;
};
