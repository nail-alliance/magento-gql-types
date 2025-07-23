import { NegotiableQuoteShippingAddressInput } from "./gql.negotiableQuoteShippingAddressInput";
import { ID } from "./gql.ID";
export type SetNegotiableQuoteShippingAddressInput = {
    customer_address_id?: ID;
    quote_uid: ID;
    shipping_addresses?: NegotiableQuoteShippingAddressInput[];
};
