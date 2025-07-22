import { SearchResultPageInfo } from "./gql.searchResultPageInfo";
import { RequisitionListItemInterface } from "./gql.requisitionListItemInterface";
export type RequistionListItems = {
    "items": RequisitionListItemInterface[];
    "page_info"?: SearchResultPageInfo | null | undefined;
    "total_pages": number;
};
