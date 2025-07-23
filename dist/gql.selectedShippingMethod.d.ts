import { String } from "./gql.string";
import { Money } from "./gql.money";
export type SelectedShippingMethod = {
    amount: Money;
    /** @deprecated */
    base_amount?: Money;
    carrier_code: String;
    carrier_title: String;
    method_code: String;
    method_title: String;
    price_excl_tax: Money;
    price_incl_tax: Money;
};
