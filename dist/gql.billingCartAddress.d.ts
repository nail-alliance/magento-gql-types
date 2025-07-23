import { CartAddressRegion } from "./gql.cartAddressRegion";
import { Int } from "./gql.int";
import { AttributeValueInterface } from "./gql.attributeValueInterface";
import { CartAddressCountry } from "./gql.cartAddressCountry";
import { String } from "./gql.string";
export type BillingCartAddress = {
    city: String;
    company?: String;
    country: CartAddressCountry;
    custom_attributes: [AttributeValueInterface];
    /** @deprecated */
    customer_notes?: String;
    fax?: String;
    firstname: String;
    id?: Int;
    lastname: String;
    middlename?: String;
    postcode?: String;
    prefix?: String;
    region?: CartAddressRegion;
    street: [String];
    suffix?: String;
    telephone?: String;
    uid: String;
    vat_id?: String;
};
