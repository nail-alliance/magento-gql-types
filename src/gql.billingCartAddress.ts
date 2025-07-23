import {CartAddressRegion} from "./gql.cartAddressRegion";
import {Int} from "./gql.int";
import {AttributeValueInterface} from "./gql.attributeValueInterface";
import {CartAddressCountry} from "./gql.cartAddressCountry";
import {String} from "./gql.string";
export type BillingCartAddress = {
	city: String // The city specified for the billing or shipping address.
	company?: String // The company specified for the billing or shipping address.
	country: CartAddressCountry // An object containing the country label and code.
	custom_attributes: AttributeValueInterface[] // The custom attribute values of the billing or shipping address.
	/** @deprecated */
	customer_notes?: String // Deprecated The field is used only in shipping address.
	fax?: String // The customer's fax number.
	firstname: String // The first name of the customer or guest.
	id?: Int // Id of the customer address.
	lastname: String // The last name of the customer or guest.
	middlename?: String // The middle name of the person associated with the billing/shipping address.
	postcode?: String // The ZIP or postal code of the billing or shipping address.
	prefix?: String // An honorific, such as Dr., Mr., or Mrs.
	region?: CartAddressRegion // An object containing the region label and code.
	street: String[] // An array containing the street for the billing or shipping address.
	suffix?: String // A value such as Sr., Jr., or III.
	telephone?: String // The telephone number for the billing or shipping address.
	uid: String // The unique id of the customer address.
	vat_id?: String // The VAT company number for billing or shipping address.
}