import {Money} from "./gql.money";
export type NegotiableQuoteHistoryTotalChange = {
	new_price?: Money // The total price as a result of the change.
	old_price?: Money // The previous total price on the negotiable quote.
}