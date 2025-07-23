import {ID} from "./gql.ID";
export type RemoveNegotiableQuoteItemsInput = {
	quote_item_uids: ID[] // An array of IDs indicating which items to remove from the negotiable quote.
	quote_uid: ID // The unique ID of a NegotiableQuote object.
}