import {SearchResultPageInfo} from "./gql.searchResultPageInfo";
import {CustomerOrder} from "./gql.customerOrder";

export type CustomerOrders = {
    "date_of_first_order"?: string | null | undefined
    "items": CustomerOrder[]
    "page_info"?: SearchResultPageInfo | null | undefined
    "total_count"?: number | null | undefined
}

