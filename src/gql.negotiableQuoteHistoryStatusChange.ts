import {NegotiableQuoteStatus} from "./gql.negotiableQuoteStatus";
export type NegotiableQuoteHistoryStatusChange = {
	new_status: NegotiableQuoteStatus // The updated status.
	old_status?: NegotiableQuoteStatus // The previous status. The value will be null for the first history entry in a negotiable quote.
}