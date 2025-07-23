import {SortEnum} from "./gql.sortEnum";
import {SortQuoteItemsEnum} from "./gql.sortQuoteItemsEnum";
export type QuoteItemsSortInput = {
	field: SortQuoteItemsEnum // Specifies the quote items field to sort by
	order: SortEnum // Specifies the order of quote items' sorting
}