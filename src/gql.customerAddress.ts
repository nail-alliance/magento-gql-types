import {CustomerAddressRegion} from "./gql.customerAddressRegion";
import {Boolean} from "./gql.boolean";
import {Int} from "./gql.int";
import {AttributeValueInterface} from "./gql.attributeValueInterface";
import {CustomerAddressAttribute} from "./gql.customerAddressAttribute";
import {CountryCodeEnum} from "./gql.countryCodeEnum";
import {String} from "./gql.string";
export type CustomerAddress = {
	city?: String // The customer's city or town.
	company?: String // The customer's company.
	country_code?: CountryCodeEnum // The customer's country.
	/** @deprecated */
	country_id?: String // The customer's country. Use country_code instead. Deprecated
	/** @deprecated */
	custom_attributes?: [CustomerAddressAttribute] // Use custom_attributesV2 instead. Deprecated
	custom_attributesV2: [AttributeValueInterface] // Custom attributes assigned to the customer address.
	/** @deprecated */
	customer_id?: Int // The customer ID customer_id is not needed as part of CustomerAddress. The id is a unique identifier for the addresses. Deprecated
	default_billing?: Boolean // Indicates whether the address is the customer's default billing address.
	default_shipping?: Boolean // Indicates whether the address is the customer's default shipping address.
	extension_attributes?: [CustomerAddressAttribute] // Contains any extension attributes for the address.
	fax?: String // The customer's fax number.
	firstname?: String // The first name of the person associated with the shipping/billing address.
	id?: Int // The ID of a CustomerAddress object.
	lastname?: String // The family name of the person associated with the shipping/billing address.
	middlename?: String // The middle name of the person associated with the shipping/billing address.
	postcode?: String // The customer's ZIP or postal code.
	prefix?: String // An honorific, such as Dr., Mr., or Mrs.
	region?: CustomerAddressRegion // An object containing the region name, region code, and region ID.
	region_id?: Int // The unique ID for a pre-defined region.
	street?: [String] // An array of strings that define the street number and name.
	suffix?: String // A value such as Sr., Jr., or III.
	telephone?: String // The customer's telephone number.
	vat_id?: String // The customer's Value-added tax (VAT) number (for corporate customers).
}