import { Boolean } from "./gql.boolean";
import { String } from "./gql.string";
export type HostedFieldsInput = {
    cardBin?: String;
    cardExpiryMonth?: String;
    cardExpiryYear?: String;
    cardLast4?: String;
    holderName?: String;
    is_active_payment_token_enabler?: Boolean;
    payment_source?: String;
    payments_order_id?: String;
    paypal_order_id?: String;
};
