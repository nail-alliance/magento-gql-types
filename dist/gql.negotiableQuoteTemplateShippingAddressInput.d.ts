import { String } from "./gql.string";
import { ID } from "./gql.ID";
import { NegotiableQuoteAddressInput } from "./gql.negotiableQuoteAddressInput";
export type NegotiableQuoteTemplateShippingAddressInput = {
    address?: NegotiableQuoteAddressInput;
    customer_address_uid?: ID;
    customer_notes?: String;
};
