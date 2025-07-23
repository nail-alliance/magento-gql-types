import {ID} from "./gql.ID";
import {NegotiableQuoteTemplateReferenceDocumentLinkInput} from "./gql.negotiableQuoteTemplateReferenceDocumentLinkInput";
import {Int} from "./gql.int";
import {String} from "./gql.string";
export type SubmitNegotiableQuoteTemplateForReviewInput = {
	comment?: String // A comment for the seller to review.
	max_order_commitment?: Int // Commitment for maximum orders
	min_order_commitment?: Int // Commitment for minimum orders
	name?: String // The title assigned to the negotiable quote template.
	reference_document_links?: [NegotiableQuoteTemplateReferenceDocumentLinkInput] // An array of reference document links to add to the negotiable quote template.
	template_id: ID // The unique ID of a NegotiableQuoteTemplate object.
}