import {NegotiableQuoteTemplateSortableField} from "./gql.negotiableQuoteTemplateSortableField";
import {SortEnum} from "./gql.sortEnum";
export type NegotiableQuoteTemplateSortInput = {
	sort_direction: SortEnum // Whether to return results in ascending or descending order.
	sort_field: NegotiableQuoteTemplateSortableField // The specified sort field.
}