import { ShippingAddressInput } from "./gql.shippingAddressInput";
import { String } from "./gql.string";
export type SetShippingAddressesOnCartInput = {
    cart_id: String;
    shipping_addresses: ShippingAddressInput[];
};
