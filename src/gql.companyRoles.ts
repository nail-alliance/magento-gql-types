import {Int} from "./gql.int";
import {SearchResultPageInfo} from "./gql.searchResultPageInfo";
import {CompanyRole} from "./gql.companyRole";
export type CompanyRoles = {
	items: CompanyRole[] // A list of company roles that match the specified filter criteria.
	page_info?: SearchResultPageInfo // Pagination metadata.
	total_count: Int // The total number of objects matching the specified filter.
}