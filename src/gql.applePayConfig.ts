import {SDKParams} from "./gql.sDKParams";
import {Boolean} from "./gql.boolean";
import {String} from "./gql.string";
import {ButtonStyles} from "./gql.buttonStyles";
export type ApplePayConfig = {
	button_styles?: ButtonStyles // The styles for the ApplePay Smart Button configuration
	code?: String // The payment method code as defined in the payment gateway
	is_visible?: Boolean // Indicates whether the payment method is displayed
	payment_intent?: String // Defines the payment intent (Authorize or Capture
	payment_source?: String // The payment source for the payment method
	sdk_params?: [SDKParams] // The PayPal parameters required to load the JS SDK
	sort_order?: String // The relative order the payment method is displayed on the checkout page
	title?: String // The name displayed for the payment method
}