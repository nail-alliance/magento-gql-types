import { String } from "./gql.string";
export type SelectedPaymentMethod = {
    code: String;
    purchase_order_number?: String;
    title: String;
};
