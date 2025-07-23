import { NegotiableQuoteAddressRegion } from "./gql.negotiableQuoteAddressRegion";
import { NegotiableQuoteAddressCountry } from "./gql.negotiableQuoteAddressCountry";
import { String } from "./gql.string";
export interface NegotiableQuoteAddressInterface {
    city: String;
    company?: String;
    country: NegotiableQuoteAddressCountry;
    firstname: String;
    lastname: String;
    postcode?: String;
    region?: NegotiableQuoteAddressRegion;
    street: String[];
    telephone?: String;
}
