import {ID} from "./gql.ID";
import {String} from "./gql.string";
export type RenameNegotiableQuoteInput = {
	quote_comment?: String // The reason for the quote name change specified by the buyer.
	quote_name: String // The new quote name the buyer specified to the negotiable quote request.
	quote_uid: ID // The cart ID of the buyer requesting a new negotiable quote.
}