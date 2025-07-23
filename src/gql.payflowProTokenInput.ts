import {PayflowProUrlInput} from "./gql.payflowProUrlInput";
import {String} from "./gql.string";
export type PayflowProTokenInput = {
	cart_id: String // The unique ID that identifies the shopper's cart.
	urls: PayflowProUrlInput // A set of relative URLs that PayPal uses for callback.
}