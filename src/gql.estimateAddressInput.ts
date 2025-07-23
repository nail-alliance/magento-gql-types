import {CustomerAddressRegionInput} from "./gql.customerAddressRegionInput";
import {String} from "./gql.string";
import {CountryCodeEnum} from "./gql.countryCodeEnum";
export type EstimateAddressInput = {
	country_code: CountryCodeEnum // The two-letter code representing the customer's country.
	postcode?: String // The customer's ZIP or postal code.
	region?: CustomerAddressRegionInput // An object containing the region name, region code, and region ID.
}