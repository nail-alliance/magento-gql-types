import { String } from "./gql.string";
import { BillingAddressInput } from "./gql.billingAddressInput";
export type SetBillingAddressOnCartInput = {
    billing_address: BillingAddressInput;
    cart_id: String;
};
