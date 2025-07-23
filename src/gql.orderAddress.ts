import {ID} from "./gql.ID";
import {AttributeValueInterface} from "./gql.attributeValueInterface";
import {CountryCodeEnum} from "./gql.countryCodeEnum";
import {String} from "./gql.string";
export type OrderAddress = {
	city: String // The city or town.
	company?: String // The customer's company.
	country_code?: CountryCodeEnum // The customer's country.
	custom_attributesV2: [AttributeValueInterface] // Custom attributes assigned to the customer address.
	fax?: String // The fax number.
	firstname: String // The first name of the person associated with the shipping/billing address.
	lastname: String // The family name of the person associated with the shipping/billing address.
	middlename?: String // The middle name of the person associated with the shipping/billing address.
	postcode?: String // The customer's ZIP or postal code.
	prefix?: String // An honorific, such as Dr., Mr., or Mrs.
	region?: String // The state or province name.
	region_id?: ID // The unique ID for a Region object of a pre-defined region.
	street: [String] // An array of strings that define the street number and name.
	suffix?: String // A value such as Sr., Jr., or III.
	telephone?: String // The telephone number.
	vat_id?: String // The customer's Value-added tax (VAT) number (for corporate customers).
}