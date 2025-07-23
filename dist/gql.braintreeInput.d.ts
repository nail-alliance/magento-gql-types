import { Boolean } from "./gql.boolean";
import { String } from "./gql.string";
export type BraintreeInput = {
    device_data?: String;
    is_active_payment_token_enabler: Boolean;
    payment_method_nonce: String;
};
