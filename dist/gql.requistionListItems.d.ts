import { Int } from "./gql.int";
import { SearchResultPageInfo } from "./gql.searchResultPageInfo";
import { RequisitionListItemInterface } from "./gql.requisitionListItemInterface";
export type RequistionListItems = {
    items: [RequisitionListItemInterface];
    page_info?: SearchResultPageInfo;
    total_pages: Int;
};
