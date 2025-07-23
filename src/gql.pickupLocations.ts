import {Int} from "./gql.int";
import {SearchResultPageInfo} from "./gql.searchResultPageInfo";
import {PickupLocation} from "./gql.pickupLocation";
export type PickupLocations = {
	items?: PickupLocation[] // An array of pickup locations that match the specific search request.
	page_info?: SearchResultPageInfo // An object that includes the page_info and currentPage values specified in the query.
	total_count?: Int // The number of products returned.
}