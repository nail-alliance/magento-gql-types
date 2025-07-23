import {CustomerAddressRegionInput} from "./gql.customerAddressRegionInput";
import {CountryCodeEnum} from "./gql.countryCodeEnum";
import {String} from "./gql.string";
export type CompanyLegalAddressCreateInput = {
	city: String // The city where the company is registered to conduct business.
	country_id: CountryCodeEnum // The company's country ID. Use the countries query to get this value.
	postcode: String // The postal code of the company.
	region: CustomerAddressRegionInput // An object containing the region name and/or region ID where the company is registered to conduct business.
	street: String[] // An array of strings that define the street address where the company is registered to conduct business.
	telephone: String // The primary phone number of the company.
}