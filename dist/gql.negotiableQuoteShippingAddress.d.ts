import { SelectedShippingMethod } from "./gql.selectedShippingMethod";
import { NegotiableQuoteAddressRegion } from "./gql.negotiableQuoteAddressRegion";
import { NegotiableQuoteAddressCountry } from "./gql.negotiableQuoteAddressCountry";
import { String } from "./gql.string";
import { AvailableShippingMethod } from "./gql.availableShippingMethod";
export type NegotiableQuoteShippingAddress = {
    available_shipping_methods?: [AvailableShippingMethod];
    city: String;
    company?: String;
    country: NegotiableQuoteAddressCountry;
    firstname: String;
    lastname: String;
    postcode?: String;
    region?: NegotiableQuoteAddressRegion;
    selected_shipping_method?: SelectedShippingMethod;
    street: [String];
    telephone?: String;
};
