import {SDKParams} from "./gql.sDKParams";
import {MessageStyles} from "./gql.messageStyles";
import {Boolean} from "./gql.boolean";
import {String} from "./gql.string";
import {ButtonStyles} from "./gql.buttonStyles";
export type SmartButtonsConfig = {
	button_styles?: ButtonStyles // The styles for the PayPal Smart Button configuration
	code?: String // The payment method code as defined in the payment gateway
	display_message?: Boolean // Indicates whether to display the PayPal Pay Later message
	display_venmo?: Boolean // Indicates whether to display Venmo
	is_visible?: Boolean // Indicates whether the payment method is displayed
	message_styles?: MessageStyles // Contains details about the styles for the PayPal Pay Later message
	payment_intent?: String // Defines the payment intent (Authorize or Capture
	sdk_params?: [SDKParams] // The PayPal parameters required to load the JS SDK
	sort_order?: String // The relative order the payment method is displayed on the checkout page
	title?: String // The name displayed for the payment method
}