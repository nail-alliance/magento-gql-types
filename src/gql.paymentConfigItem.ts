import {SDKParams} from "./gql.sDKParams";
import {Boolean} from "./gql.boolean";
import {String} from "./gql.string";
export type PaymentConfigItem = {
	code?: String // The payment method code as defined in the payment gateway
	is_visible?: Boolean // Indicates whether the payment method is displayed
	payment_intent?: String // Defines the payment intent (Authorize or Capture
	sdk_params?: SDKParams[] // The PayPal parameters required to load the JS SDK
	sort_order?: String // The relative order the payment method is displayed on the checkout page
	title?: String // The name displayed for the payment method
}