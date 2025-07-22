import {SearchResultPageInfo} from "./gql.searchResultPageInfo";

import {RequisitionList} from "./gql.requisitionList";

export type RequisitionLists = {
    "items"?: RequisitionList[] | null | undefined
    "page_info"?: SearchResultPageInfo | null | undefined
    "total_count"?: number | null | undefined
}