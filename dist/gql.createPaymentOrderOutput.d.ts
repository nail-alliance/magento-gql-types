import { String } from "./gql.string";
import { Float } from "./gql.float";
export type CreatePaymentOrderOutput = {
    amount?: Float;
    currency_code?: String;
    id?: String;
    mp_order_id?: String;
    status?: String;
};
