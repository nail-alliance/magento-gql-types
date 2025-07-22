import { SearchResultPageInfo } from "./gql.searchResultPageInfo";
import { CustomerAddress } from "./gql.customerAddress";
export type CustomerAddresses = {
    "items"?: CustomerAddress[] | null | undefined;
    "page_info"?: SearchResultPageInfo | null | undefined;
    "total_count"?: number | null | undefined;
};
