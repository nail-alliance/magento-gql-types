import { String } from "./gql.string";
export type GooglePayMethodInput = {
    payment_source?: String;
    payments_order_id?: String;
    paypal_order_id?: String;
};
