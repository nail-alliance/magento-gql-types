import {Boolean} from "./gql.boolean";
import {Int} from "./gql.int";
import {String} from "./gql.string";
export type CustomerInput = {
	date_of_birth?: String // The customer's date of birth.
	dob?: String // 
	email?: String // The customer's email address. Required when creating a customer.
	firstname?: String // The customer's first name.
	gender?: Int // The customer's gender (Male - 1, Female - 2).
	is_subscribed?: Boolean // Indicates whether the customer is subscribed to the company's newsletter.
	lastname?: String // The customer's family name.
	middlename?: String // The customer's middle name.
	password?: String // The customer's password.
	prefix?: String // An honorific, such as Dr., Mr., or Mrs.
	suffix?: String // A value such as Sr., Jr., or III.
	taxvat?: String // The customer's Tax/VAT number (for corporate customers).
}