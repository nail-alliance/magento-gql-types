import { CustomerAddressRegion } from "./gql.customerAddressRegion";
import { Boolean } from "./gql.boolean";
import { Int } from "./gql.int";
import { AttributeValueInterface } from "./gql.attributeValueInterface";
import { CustomerAddressAttribute } from "./gql.customerAddressAttribute";
import { CountryCodeEnum } from "./gql.countryCodeEnum";
import { String } from "./gql.string";
export type CustomerAddress = {
    city?: String;
    company?: String;
    country_code?: CountryCodeEnum;
    /** @deprecated */
    country_id?: String;
    /** @deprecated */
    custom_attributes?: CustomerAddressAttribute[];
    custom_attributesV2: AttributeValueInterface[];
    /** @deprecated */
    customer_id?: Int;
    default_billing?: Boolean;
    default_shipping?: Boolean;
    extension_attributes?: CustomerAddressAttribute[];
    fax?: String;
    firstname?: String;
    id?: Int;
    lastname?: String;
    middlename?: String;
    postcode?: String;
    prefix?: String;
    region?: CustomerAddressRegion;
    region_id?: Int;
    street?: String[];
    suffix?: String;
    telephone?: String;
    vat_id?: String;
};
