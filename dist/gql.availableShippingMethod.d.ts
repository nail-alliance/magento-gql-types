import { Money } from "./gql.money";
export type AvailableShippingMethod = {
    "amount": Money;
    "available": boolean;
    /** @deprecated */
    "base_amount"?: Money | null | undefined;
    "carrier_code": string;
    "carrier_title": string;
    "error_message"?: string | null | undefined;
    "method_code"?: string | null | undefined;
    "method_title"?: string | null | undefined;
    "price_excl_tax": Money;
    "price_incl_tax": Money;
};
