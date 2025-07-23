import {FilterEqualTypeInput} from "./gql.filterEqualTypeInput";
import {FilterStringTypeInput} from "./gql.filterStringTypeInput";
import {FilterRangeTypeInput} from "./gql.filterRangeTypeInput";
export type CustomerOrdersFilterInput = {
	grand_total?: FilterRangeTypeInput // Filters by order base grand total value.
	number?: FilterStringTypeInput // Filters by order number.
	order_date?: FilterRangeTypeInput // Filters by order created_at time.
	status?: FilterEqualTypeInput // Filters by order status.
}