import {String} from "./gql.string";
export type SetGuestEmailOnCartInput = {
	cart_id: String // The unique ID of a Cart object.
	email: String // The email address of the guest.
}