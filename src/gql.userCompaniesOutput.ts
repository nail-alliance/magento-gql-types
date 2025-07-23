import {SearchResultPageInfo} from "./gql.searchResultPageInfo";
import {CompanyBasicInfo} from "./gql.companyBasicInfo";
export type UserCompaniesOutput = {
	items: [CompanyBasicInfo] // An array of companies customer is assigned to.
	page_info: SearchResultPageInfo // Provides navigation for the query response.
}