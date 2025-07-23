import { CustomerOrderSortableField } from "./gql.customerOrderSortableField";
import { SortEnum } from "./gql.sortEnum";
export type CustomerOrderSortInput = {
    sort_direction: SortEnum;
    sort_field: CustomerOrderSortableField;
};
