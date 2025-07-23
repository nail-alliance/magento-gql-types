import {CustomerAddressRegion} from "./gql.customerAddressRegion";
import {CountryCodeEnum} from "./gql.countryCodeEnum";
import {String} from "./gql.string";
export type CompanyLegalAddress = {
	city?: String // The city where the company is registered to conduct business.
	country_code?: CountryCodeEnum // The country code of the company's legal address.
	postcode?: String // The company's postal code.
	region?: CustomerAddressRegion // An object containing region data for the company.
	street?: [String] // An array of strings that define the company's street address.
	telephone?: String // The company's phone number.
}