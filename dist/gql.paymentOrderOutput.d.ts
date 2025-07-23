import { PaymentSourceDetails } from "./gql.paymentSourceDetails";
import { String } from "./gql.string";
export type PaymentOrderOutput = {
    id?: String;
    mp_order_id?: String;
    payment_source_details?: PaymentSourceDetails;
    status?: String;
};
