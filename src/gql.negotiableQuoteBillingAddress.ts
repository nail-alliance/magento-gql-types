import {NegotiableQuoteAddressRegion} from "./gql.negotiableQuoteAddressRegion";
import {NegotiableQuoteAddressCountry} from "./gql.negotiableQuoteAddressCountry";
import {String} from "./gql.string";
export type NegotiableQuoteBillingAddress = {
	city: String // The company's city or town.
	company?: String // The company name associated with the shipping/billing address.
	country: NegotiableQuoteAddressCountry // The company's country.
	firstname: String // The first name of the company user.
	lastname: String // The last name of the company user.
	postcode?: String // The company's ZIP or postal code.
	region?: NegotiableQuoteAddressRegion // An object containing the region name, region code, and region ID.
	street: String[] // An array of strings that define the street number and name.
	telephone?: String // The customer's telephone number.
}