import {SortEnum} from "./gql.sortEnum";
import {CompaniesSortFieldEnum} from "./gql.companiesSortFieldEnum";
export type CompaniesSortInput = {
	field: CompaniesSortFieldEnum // The field for sorting the results.
	order: SortEnum // Indicates whether to return results in ascending or descending order.
}