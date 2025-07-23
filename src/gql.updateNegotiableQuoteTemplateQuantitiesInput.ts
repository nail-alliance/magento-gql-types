import {ID} from "./gql.ID";
import {NegotiableQuoteTemplateItemQuantityInput} from "./gql.negotiableQuoteTemplateItemQuantityInput";
export type UpdateNegotiableQuoteTemplateQuantitiesInput = {
	items: NegotiableQuoteTemplateItemQuantityInput[] // An array of items to update.
	template_id: ID // The unique ID of a NegotiableQuoteTemplate object.
}