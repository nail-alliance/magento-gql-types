import {ID} from "./gql.ID";
export type DeleteNegotiableQuotesInput = {
	quote_uids: [ID] // A list of unique IDs for NegotiableQuote objects to delete.
}