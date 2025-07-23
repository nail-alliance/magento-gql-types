import { ID } from "./gql.ID";
import { String } from "./gql.string";
export type NegotiableQuoteReferenceDocumentLink = {
    document_identifier?: String;
    document_name: String;
    link_id: ID;
    reference_document_url: String;
};
