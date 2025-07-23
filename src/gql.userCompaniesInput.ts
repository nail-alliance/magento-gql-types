import {CompaniesSortInput} from "./gql.companiesSortInput";
import {Int} from "./gql.int";
export type UserCompaniesInput = {
	currentPage?: Int // Specifies which page of results to return. The default value is 1.
	pageSize?: Int // Specifies the maximum number of results to return at once. This attribute is optional.
	sort?: [CompaniesSortInput] // Defines the sorting of the results.
}