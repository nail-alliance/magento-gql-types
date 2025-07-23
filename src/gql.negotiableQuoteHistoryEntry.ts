import {ID} from "./gql.ID";
import {String} from "./gql.string";
import {NegotiableQuoteHistoryChanges} from "./gql.negotiableQuoteHistoryChanges";
import {NegotiableQuoteHistoryEntryChangeType} from "./gql.negotiableQuoteHistoryEntryChangeType";
import {NegotiableQuoteUser} from "./gql.negotiableQuoteUser";
export type NegotiableQuoteHistoryEntry = {
	author: NegotiableQuoteUser // The person who made a change in the status of the negotiable quote.
	change_type: NegotiableQuoteHistoryEntryChangeType // An enum that describes the why the entry in the negotiable quote history changed status.
	changes?: NegotiableQuoteHistoryChanges // The set of changes in the negotiable quote.
	created_at?: String // Timestamp indicating when the negotiable quote entry was created.
	uid: ID // The unique ID of a NegotiableQuoteHistoryEntry object.
}