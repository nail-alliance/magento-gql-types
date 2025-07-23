import { Int } from "./gql.int";
import { SearchResultPageInfo } from "./gql.searchResultPageInfo";
import { PurchaseOrder } from "./gql.purchaseOrder";
export type PurchaseOrders = {
    items: [PurchaseOrder];
    page_info?: SearchResultPageInfo;
    total_count?: Int;
};
