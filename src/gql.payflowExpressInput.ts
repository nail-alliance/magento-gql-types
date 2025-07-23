import {String} from "./gql.string";
export type PayflowExpressInput = {
	payer_id: String // The unique ID of the PayPal user.
	token: String // The token returned by the createPaypalExpressToken mutation.
}