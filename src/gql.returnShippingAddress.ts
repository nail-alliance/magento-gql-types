import {Region} from "./gql.region";
import {Country} from "./gql.country";
import {String} from "./gql.string";
export type ReturnShippingAddress = {
	city: String // The city for product returns.
	contact_name?: String // The merchant's contact person.
	country: Country // An object that defines the country for product returns.
	postcode: String // The postal code for product returns.
	region: Region // An object that defines the state or province for product returns.
	street: String[] // The street address for product returns.
	telephone?: String // The telephone number for product returns.
}