import { String } from "./gql.string";
import { Int } from "./gql.int";
export type CreditCardDetailsInput = {
    cc_exp_month: Int;
    cc_exp_year: Int;
    cc_last_4: Int;
    cc_type: String;
};
