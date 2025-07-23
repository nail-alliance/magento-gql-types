import { Int } from "./gql.int";
import { SearchResultPageInfo } from "./gql.searchResultPageInfo";
import { CustomerAddress } from "./gql.customerAddress";
export type CustomerAddresses = {
    items?: [CustomerAddress];
    page_info?: SearchResultPageInfo;
    total_count?: Int;
};
