import { ShippingMethodInput } from "./gql.shippingMethodInput";
import { String } from "./gql.string";
export type SetShippingMethodsOnCartInput = {
    cart_id: String;
    shipping_methods: [ShippingMethodInput];
};
