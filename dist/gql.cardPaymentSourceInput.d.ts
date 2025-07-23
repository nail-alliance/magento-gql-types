import { String } from "./gql.string";
import { BillingAddressPaymentSourceInput } from "./gql.billingAddressPaymentSourceInput";
export type CardPaymentSourceInput = {
    billing_address: BillingAddressPaymentSourceInput;
    name?: String;
};
