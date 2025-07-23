import {ID} from "./gql.ID";
export type RemoveNegotiableQuoteTemplateItemsInput = {
	item_uids: ID[] // An array of IDs indicating which items to remove from the negotiable quote.
	template_id: ID // The unique ID of a NegotiableQuoteTemplate object.
}