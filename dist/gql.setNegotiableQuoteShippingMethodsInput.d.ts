import { ShippingMethodInput } from "./gql.shippingMethodInput";
import { ID } from "./gql.ID";
export type SetNegotiableQuoteShippingMethodsInput = {
    quote_uid: ID;
    shipping_methods: [ShippingMethodInput];
};
