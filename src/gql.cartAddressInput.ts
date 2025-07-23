import {Boolean} from "./gql.boolean";
import {Int} from "./gql.int";
import {AttributeValueInput} from "./gql.attributeValueInput";
import {String} from "./gql.string";
export type CartAddressInput = {
	city: String // The city specified for the billing or shipping address.
	company?: String // The company specified for the billing or shipping address.
	country_code: String // The country code and label for the billing or shipping address.
	custom_attributes?: AttributeValueInput[] // The custom attribute values of the billing or shipping address.
	fax?: String // The customer's fax number.
	firstname: String // The first name of the customer or guest.
	lastname: String // The last name of the customer or guest.
	middlename?: String // The middle name of the person associated with the billing/shipping address.
	postcode?: String // The ZIP or postal code of the billing or shipping address.
	prefix?: String // An honorific, such as Dr., Mr., or Mrs.
	region?: String // A string that defines the state or province of the billing or shipping address.
	region_id?: Int // An integer that defines the state or province of the billing or shipping address.
	save_in_address_book?: Boolean // Determines whether to save the address in the customer's address book. The default value is true.
	street: String[] // An array containing the street for the billing or shipping address.
	suffix?: String // A value such as Sr., Jr., or III.
	telephone?: String // The telephone number for the billing or shipping address.
	vat_id?: String // The VAT company number for billing or shipping address.
}