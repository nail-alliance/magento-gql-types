import { NegotiableQuoteSortableField } from "./gql.negotiableQuoteSortableField";
import { SortEnum } from "./gql.sortEnum";
export type NegotiableQuoteSortInput = {
    sort_direction: SortEnum;
    sort_field: NegotiableQuoteSortableField;
};
