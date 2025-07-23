import { Int } from "./gql.int";
import { SearchResultPageInfo } from "./gql.searchResultPageInfo";
import { CustomerOrder } from "./gql.customerOrder";
import { String } from "./gql.string";
export type CustomerOrders = {
    date_of_first_order?: String;
    items: [CustomerOrder];
    page_info?: SearchResultPageInfo;
    total_count?: Int;
};
