import { AvailableShippingMethod } from "./gql.availableShippingMethod";
import { CartItemQuantity } from "./gql.cartItemQuantity";
import { CartAddressRegion } from "./gql.cartAddressRegion";
import { SelectedShippingMethod } from "./gql.selectedShippingMethod";
import { CartAddressCountry } from "./gql.cartAddressCountry";
import { AttributeValueInterface } from "./gql.attributeValueInterface";
import { CartItemInterface } from "./gql.cartItemInterface";
export type ShippingCartAddress = {
    "available_shipping_methods"?: AvailableShippingMethod[] | null | undefined;
    /** @deprecated */
    "cart_items"?: CartItemQuantity[] | null | undefined;
    "cart_items_v2"?: CartItemInterface[] | null | undefined;
    "city": string;
    "company"?: string | null | undefined;
    "country": CartAddressCountry;
    "custom_attributes": AttributeValueInterface[];
    "customer_notes"?: string | null | undefined;
    "fax"?: string | null | undefined;
    "firstname": string;
    "id": number;
    /** @deprecated */
    "items_weight"?: number | null | undefined;
    "lastname": string;
    "middlename"?: string | null | undefined;
    "pickup_location_code"?: string | null | undefined;
    "postcode"?: string | null | undefined;
    "prefix"?: string | null | undefined;
    "region"?: CartAddressRegion | null | undefined;
    "same_as_billing": boolean;
    "selected_shipping_method"?: SelectedShippingMethod | null | undefined;
    "street": string[];
    "suffix"?: string | null | undefined;
    "telephone"?: string | null | undefined;
    "uid": string;
    "vat_id"?: string | null | undefined;
};
