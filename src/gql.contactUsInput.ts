import {String} from "./gql.string";
export type ContactUsInput = {
	comment: String // The shopper's comment to the merchant.
	email: String // The email address of the shopper.
	name: String // The full name of the shopper.
	telephone?: String // The shopper's telephone number.
}