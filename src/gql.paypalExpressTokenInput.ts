import {PaypalExpressUrlsInput} from "./gql.paypalExpressUrlsInput";
import {Boolean} from "./gql.boolean";
import {String} from "./gql.string";
export type PaypalExpressTokenInput = {
	cart_id: String // The unique ID that identifies the customer's cart.
	code: String // The payment method code.
	express_button?: Boolean // Indicates whether the buyer selected the quick checkout button. The default value is false.
	urls: PaypalExpressUrlsInput // A set of relative URLs that PayPal uses in response to various actions during the authorization process.
	use_paypal_credit?: Boolean // Indicates whether the buyer clicked the PayPal credit button. The default value is false.
}