import {String} from "./gql.string";
export type ConfirmEmailInput = {
	confirmation_key: String // The key to confirm the email address.
	email: String // The email address to be confirmed.
}