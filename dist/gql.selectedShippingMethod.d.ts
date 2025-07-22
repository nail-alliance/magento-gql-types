import { Money } from "./gql.money";
export type SelectedShippingMethod = {
    "amount": Money;
    /** @deprecated */
    "base_amount"?: Money | null | undefined;
    "carrier_code": string;
    "carrier_title": string;
    "method_code": string;
    "method_title": string;
    "price_excl_tax": Money;
    "price_incl_tax": Money;
};
