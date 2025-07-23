import {ID} from "./gql.ID";
import {String} from "./gql.string";
export type LineItemNoteInput = {
	note?: String // The note text to be added.
	quote_item_uid: ID // The unique ID of a CartLineItem object.
	quote_uid: ID // The unique ID of a NegotiableQuote object.
}