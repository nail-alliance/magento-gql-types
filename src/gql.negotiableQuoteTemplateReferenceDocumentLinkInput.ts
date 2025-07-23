import {ID} from "./gql.ID";
import {String} from "./gql.string";
export type NegotiableQuoteTemplateReferenceDocumentLinkInput = {
	document_identifier?: String // The identifier of the reference document.
	document_name: String // The title of the reference document.
	link_id?: ID // The unique ID of a NegotiableQuoteReferenceDocumentLink object.
	reference_document_url: String // The URL of the reference document.
}