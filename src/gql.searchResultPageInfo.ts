import {Int} from "./gql.int";
export type SearchResultPageInfo = {
	current_page?: Int // The specific page to return.
	page_size?: Int // The maximum number of items to return per page of results.
	total_pages?: Int // The total number of pages in the response.
}