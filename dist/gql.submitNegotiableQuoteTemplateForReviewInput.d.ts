import { ID } from "./gql.ID";
import { NegotiableQuoteTemplateReferenceDocumentLinkInput } from "./gql.negotiableQuoteTemplateReferenceDocumentLinkInput";
import { Int } from "./gql.int";
import { String } from "./gql.string";
export type SubmitNegotiableQuoteTemplateForReviewInput = {
    comment?: String;
    max_order_commitment?: Int;
    min_order_commitment?: Int;
    name?: String;
    reference_document_links?: NegotiableQuoteTemplateReferenceDocumentLinkInput[];
    template_id: ID;
};
