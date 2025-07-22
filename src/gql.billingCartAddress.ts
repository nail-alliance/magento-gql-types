import {CartAddressCountry} from "./gql.cartAddressCountry";
import {AttributeValueInterface} from "./gql.attributeValueInterface";
import {ID} from "./gql.ID";
import {CartAddressRegion} from "./gql.cartAddressRegion";

export type BillingCartAddress = {
    "city": string
    "company"?: string | null | undefined
    "country": CartAddressCountry
    "custom_attributes": AttributeValueInterface[]
    /** @deprecated */
    "customer_notes"?: string | null | undefined
    "fax"?: string | null | undefined
    "firstname": string
    "id": ID
    "lastname": string
    "middlename"?: string | null | undefined
    "postcode"?: string | null | undefined
    "prefix"?: string | null | undefined
    "region"?: CartAddressRegion | null | undefined
    "street": string[]
    "suffix"?: string | null | undefined
    "telephone"?: string | null | undefined
    "uid": string
    "vat_id": string
}