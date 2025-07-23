import {ID} from "./gql.ID";
export type CloseNegotiableQuotesInput = {
	quote_uids: [ID] // A list of unique IDs from NegotiableQuote objects.
}