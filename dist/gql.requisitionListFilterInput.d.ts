import { FilterEqualTypeInput } from "./gql.filterEqualTypeInput";
import { FilterMatchTypeInput } from "./gql.filterMatchTypeInput";
export type RequisitionListFilterInput = {
    name?: FilterMatchTypeInput;
    uids?: FilterEqualTypeInput;
};
