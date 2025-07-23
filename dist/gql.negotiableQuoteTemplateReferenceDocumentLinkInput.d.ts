import { ID } from "./gql.ID";
import { String } from "./gql.string";
export type NegotiableQuoteTemplateReferenceDocumentLinkInput = {
    document_identifier?: String;
    document_name: String;
    link_id?: ID;
    reference_document_url: String;
};
