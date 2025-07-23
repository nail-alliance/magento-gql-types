import { String } from "./gql.string";
import { Int } from "./gql.int";
import { CartAddressInput } from "./gql.cartAddressInput";
export type ShippingAddressInput = {
    address?: CartAddressInput;
    customer_address_id?: Int;
    customer_notes?: String;
    pickup_location_code?: String;
};
