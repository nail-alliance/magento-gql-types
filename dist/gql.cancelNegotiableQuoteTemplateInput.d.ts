import { ID } from "./gql.ID";
import { String } from "./gql.string";
export type CancelNegotiableQuoteTemplateInput = {
    cancellation_comment?: String;
    template_id: ID;
};
