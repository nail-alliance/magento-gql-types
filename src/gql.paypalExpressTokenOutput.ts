import {String} from "./gql.string";
import {PaypalExpressUrlList} from "./gql.paypalExpressUrlList";
export type PaypalExpressTokenOutput = {
	paypal_urls?: PaypalExpressUrlList // A set of URLs that allow the buyer to authorize payment and adjust checkout details.
	token?: String // The token returned by PayPal.
}