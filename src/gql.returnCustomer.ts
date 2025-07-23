import {String} from "./gql.string";
export type ReturnCustomer = {
	email: String // The email address of the customer.
	firstname?: String // The first name of the customer.
	lastname?: String // The last name of the customer.
}