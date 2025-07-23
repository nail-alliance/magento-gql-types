import {String} from "./gql.string";
export type BillingAddressPaymentSourceInput = {
	address_line_1?: String // The first line of the address
	address_line_2?: String // The second line of the address
	city?: String // The city of the address
	country_code: String // The country of the address
	postal_code?: String // The postal code of the address
	region?: String // The region of the address
}