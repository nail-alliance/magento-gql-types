import {CustomerOrderSortableField} from "./gql.customerOrderSortableField";
import {SortEnum} from "./gql.sortEnum";
export type CustomerOrderSortInput = {
	sort_direction: SortEnum // This enumeration indicates whether to return results in ascending or descending order
	sort_field: CustomerOrderSortableField // Specifies the field to use for sorting
}