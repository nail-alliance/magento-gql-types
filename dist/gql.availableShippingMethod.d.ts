import { String } from "./gql.string";
import { Boolean } from "./gql.boolean";
import { Money } from "./gql.money";
export type AvailableShippingMethod = {
    amount: Money;
    available: Boolean;
    /** @deprecated */
    base_amount?: Money;
    carrier_code: String;
    carrier_title: String;
    error_message?: String;
    method_code?: String;
    method_title?: String;
    price_excl_tax: Money;
    price_incl_tax: Money;
};
