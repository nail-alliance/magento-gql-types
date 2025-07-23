import {NegotiableQuoteSortableField} from "./gql.negotiableQuoteSortableField";
import {SortEnum} from "./gql.sortEnum";
export type NegotiableQuoteSortInput = {
	sort_direction: SortEnum // Whether to return results in ascending or descending order.
	sort_field: NegotiableQuoteSortableField // The specified sort field.
}