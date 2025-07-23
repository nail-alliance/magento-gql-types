import {CustomerAddressRegionInput} from "./gql.customerAddressRegionInput";
import {Boolean} from "./gql.boolean";
import {AttributeValueInput} from "./gql.attributeValueInput";
import {CustomerAddressAttributeInput} from "./gql.customerAddressAttributeInput";
import {CountryCodeEnum} from "./gql.countryCodeEnum";
import {String} from "./gql.string";
export type CustomerAddressInput = {
	city?: String // The customer's city or town.
	company?: String // The customer's company.
	country_code?: CountryCodeEnum // The two-letter code representing the customer's country.
	country_id?: CountryCodeEnum // 
	custom_attributes?: CustomerAddressAttributeInput[] // 
	custom_attributesV2?: AttributeValueInput[] // Custom attributes assigned to the customer address.
	default_billing?: Boolean // Indicates whether the address is the default billing address.
	default_shipping?: Boolean // Indicates whether the address is the default shipping address.
	fax?: String // The customer's fax number.
	firstname?: String // The first name of the person associated with the billing/shipping address.
	lastname?: String // The family name of the person associated with the billing/shipping address.
	middlename?: String // The middle name of the person associated with the billing/shipping address.
	postcode?: String // The customer's ZIP or postal code.
	prefix?: String // An honorific, such as Dr., Mr., or Mrs.
	region?: CustomerAddressRegionInput // An object containing the region name, region code, and region ID.
	street?: String[] // An array of strings that define the street number and name.
	suffix?: String // A value such as Sr., Jr., or III.
	telephone?: String // The customer's telephone number.
	vat_id?: String // The customer's Tax/VAT number (for corporate customers).
}