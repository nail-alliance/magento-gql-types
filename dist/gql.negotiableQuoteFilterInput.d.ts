import { FilterMatchTypeInput } from "./gql.filterMatchTypeInput";
import { FilterEqualTypeInput } from "./gql.filterEqualTypeInput";
export type NegotiableQuoteFilterInput = {
    ids?: FilterEqualTypeInput;
    name?: FilterMatchTypeInput;
};
