import {FilterMatchTypeInput} from "./gql.filterMatchTypeInput";
import {FilterEqualTypeInput} from "./gql.filterEqualTypeInput";
export type NegotiableQuoteFilterInput = {
	ids?: FilterEqualTypeInput // Filter by the ID of one or more negotiable quotes.
	name?: FilterMatchTypeInput // Filter by the negotiable quote name.
}