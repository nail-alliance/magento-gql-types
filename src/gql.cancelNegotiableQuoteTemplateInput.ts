import {ID} from "./gql.ID";
import {String} from "./gql.string";
export type CancelNegotiableQuoteTemplateInput = {
	cancellation_comment?: String // A comment to provide reason of cancellation.
	template_id: ID // The unique ID of a NegotiableQuoteTemplate object.
}