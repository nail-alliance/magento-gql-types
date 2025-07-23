import {String} from "./gql.string";
import {ID} from "./gql.ID";
export type QuoteTemplateLineItemNoteInput = {
	item_id: ID // The unique ID of a CartLineItem object.
	note?: String // The note text to be added.
	templateId: ID // The unique ID of a NegotiableQuoteTemplate object.
}