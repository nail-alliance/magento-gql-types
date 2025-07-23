import { Int } from "./gql.int";
import { SearchResultPageInfo } from "./gql.searchResultPageInfo";
import { RequisitionList } from "./gql.requisitionList";
export type RequisitionLists = {
    items?: RequisitionList[];
    page_info?: SearchResultPageInfo;
    total_count?: Int;
};
