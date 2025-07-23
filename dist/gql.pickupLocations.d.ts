import { Int } from "./gql.int";
import { SearchResultPageInfo } from "./gql.searchResultPageInfo";
import { PickupLocation } from "./gql.pickupLocation";
export type PickupLocations = {
    items?: PickupLocation[];
    page_info?: SearchResultPageInfo;
    total_count?: Int;
};
