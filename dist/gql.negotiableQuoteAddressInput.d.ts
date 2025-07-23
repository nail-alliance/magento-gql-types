import { Boolean } from "./gql.boolean";
import { Int } from "./gql.int";
import { String } from "./gql.string";
export type NegotiableQuoteAddressInput = {
    city: String;
    company?: String;
    country_code: String;
    firstname: String;
    lastname: String;
    postcode?: String;
    region?: String;
    region_id?: Int;
    save_in_address_book?: Boolean;
    street: String[];
    telephone?: String;
};
