import { ID } from "./gql.ID";
import { NegotiableQuoteTemplateShippingAddressInput } from "./gql.negotiableQuoteTemplateShippingAddressInput";
export type SetNegotiableQuoteTemplateShippingAddressInput = {
    shipping_address: NegotiableQuoteTemplateShippingAddressInput;
    template_id: ID;
};
