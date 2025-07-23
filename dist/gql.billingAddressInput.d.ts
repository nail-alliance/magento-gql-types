import { Boolean } from "./gql.boolean";
import { Int } from "./gql.int";
import { CartAddressInput } from "./gql.cartAddressInput";
export type BillingAddressInput = {
    address?: CartAddressInput;
    customer_address_id?: Int;
    same_as_shipping?: Boolean;
    use_for_shipping?: Boolean;
};
