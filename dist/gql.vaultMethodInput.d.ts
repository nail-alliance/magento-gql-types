import { String } from "./gql.string";
export type VaultMethodInput = {
    payment_source?: String;
    payments_order_id?: String;
    paypal_order_id?: String;
    public_hash?: String;
};
