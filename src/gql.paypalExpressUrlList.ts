import {String} from "./gql.string";
export type PaypalExpressUrlList = {
	edit?: String // The PayPal URL that allows the buyer to edit their checkout details.
	start?: String // The URL to the PayPal login page.
}