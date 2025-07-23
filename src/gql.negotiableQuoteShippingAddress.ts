import {SelectedShippingMethod} from "./gql.selectedShippingMethod";
import {NegotiableQuoteAddressRegion} from "./gql.negotiableQuoteAddressRegion";
import {NegotiableQuoteAddressCountry} from "./gql.negotiableQuoteAddressCountry";
import {String} from "./gql.string";
import {AvailableShippingMethod} from "./gql.availableShippingMethod";
export type NegotiableQuoteShippingAddress = {
	available_shipping_methods?: [AvailableShippingMethod] // An array of shipping methods available to the buyer.
	city: String // The company's city or town.
	company?: String // The company name associated with the shipping/billing address.
	country: NegotiableQuoteAddressCountry // The company's country.
	firstname: String // The first name of the company user.
	lastname: String // The last name of the company user.
	postcode?: String // The company's ZIP or postal code.
	region?: NegotiableQuoteAddressRegion // An object containing the region name, region code, and region ID.
	selected_shipping_method?: SelectedShippingMethod // The selected shipping method.
	street: [String] // An array of strings that define the street number and name.
	telephone?: String // The customer's telephone number.
}