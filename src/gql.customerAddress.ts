import {AttributeValueInterface} from "./gql.attributeValueInterface";
import {CountryCodeEnum} from "./gql.countryCodeEnum";
import {CustomerAddressAttribute} from "./gql.customerAddressAttribute";
import {CustomerAddressRegion} from "./gql.customerAddressRegion";

export type CustomerAddress = {
    "city"?: string | null | undefined
    "company"?: string | null | undefined
    "country_code"?: CountryCodeEnum | null | undefined
    "country_id"?: string | null | undefined
    "custom_attributes"?: CustomerAddressAttribute[] | null | undefined
    "custom_attributesV2": AttributeValueInterface[]
    /** @deprecated */
    "customer_id"?: number | null | undefined
    "default_billing"?: boolean | null | undefined
    "default_shipping"?: boolean | null | undefined
    "extension_attributes"?: CustomerAddressAttribute[] | null | undefined
    "fax"?: string | null | undefined
    "firstname"?: string | null | undefined
    "id"?: number | null | undefined
    "lastname"?: string | null | undefined
    "middlename"?: string | null | undefined
    "postcode"?: string | null | undefined
    "prefix"?: string | null | undefined
    "region"?: CustomerAddressRegion | null | undefined
    "region_id"?: number | null | undefined
    "street"?: string[] | null | undefined
    "suffix"?: string | null | undefined
    "telephone"?: string | null | undefined
    "vat_id"?: string | null | undefined
}

