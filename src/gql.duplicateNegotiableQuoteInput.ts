import {ID} from "./gql.ID";
export type DuplicateNegotiableQuoteInput = {
	duplicated_quote_uid: ID // ID for the newly duplicated quote.
	quote_uid: ID // ID of the quote to be duplicated.
}