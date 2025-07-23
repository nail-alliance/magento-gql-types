import {NegotiableQuoteHistoryStatusChange} from "./gql.negotiableQuoteHistoryStatusChange";
export type NegotiableQuoteHistoryStatusesChange = {
	changes: [NegotiableQuoteHistoryStatusChange] // A list of status changes.
}