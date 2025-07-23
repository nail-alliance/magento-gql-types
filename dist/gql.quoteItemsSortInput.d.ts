import { SortEnum } from "./gql.sortEnum";
import { SortQuoteItemsEnum } from "./gql.sortQuoteItemsEnum";
export type QuoteItemsSortInput = {
    field: SortQuoteItemsEnum;
    order: SortEnum;
};
