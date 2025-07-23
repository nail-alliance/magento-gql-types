import {Int} from "./gql.int";
import {SearchResultPageInfo} from "./gql.searchResultPageInfo";
import {CustomerAddress} from "./gql.customerAddress";
export type CustomerAddresses = {
	items?: CustomerAddress[] // An array containing the customer's shipping and billing addresses.
	page_info?: SearchResultPageInfo // Contains pagination metadata.
	total_count?: Int // The total count of customer addresses.
}