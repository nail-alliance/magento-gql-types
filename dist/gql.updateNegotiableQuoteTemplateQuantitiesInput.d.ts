import { ID } from "./gql.ID";
import { NegotiableQuoteTemplateItemQuantityInput } from "./gql.negotiableQuoteTemplateItemQuantityInput";
export type UpdateNegotiableQuoteTemplateQuantitiesInput = {
    items: [NegotiableQuoteTemplateItemQuantityInput];
    template_id: ID;
};
