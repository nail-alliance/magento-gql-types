import { FilterEqualTypeInput } from "./gql.filterEqualTypeInput";
import { FilterStringTypeInput } from "./gql.filterStringTypeInput";
import { FilterRangeTypeInput } from "./gql.filterRangeTypeInput";
export type CustomerOrdersFilterInput = {
    grand_total?: FilterRangeTypeInput;
    number?: FilterStringTypeInput;
    order_date?: FilterRangeTypeInput;
    status?: FilterEqualTypeInput;
};
