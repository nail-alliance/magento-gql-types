import {ID} from "./gql.ID";
import {NegotiableQuoteItemQuantityInput} from "./gql.negotiableQuoteItemQuantityInput";
export type UpdateNegotiableQuoteQuantitiesInput = {
	items: NegotiableQuoteItemQuantityInput[] // An array of items to update.
	quote_uid: ID // The unique ID of a NegotiableQuote object.
}