import {String} from "./gql.string";
export type OrderCustomerInfo = {
	firstname: String // First name of the customer
	lastname?: String // Last name of the customer
	middlename?: String // Middle name of the customer
	prefix?: String // Prefix of the customer
	suffix?: String // Suffix of the customer
}