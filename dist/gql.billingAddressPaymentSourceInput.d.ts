import { String } from "./gql.string";
export type BillingAddressPaymentSourceInput = {
    address_line_1?: String;
    address_line_2?: String;
    city?: String;
    country_code: String;
    postal_code?: String;
    region?: String;
};
