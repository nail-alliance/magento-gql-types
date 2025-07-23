import { NegotiableQuoteTemplateSortableField } from "./gql.negotiableQuoteTemplateSortableField";
import { SortEnum } from "./gql.sortEnum";
export type NegotiableQuoteTemplateSortInput = {
    sort_direction: SortEnum;
    sort_field: NegotiableQuoteTemplateSortableField;
};
