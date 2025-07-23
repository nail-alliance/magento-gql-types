import {String} from "./gql.string";
export type GuestOrderCancelInput = {
	reason: String // Cancellation reason.
	token: String // Order token.
}