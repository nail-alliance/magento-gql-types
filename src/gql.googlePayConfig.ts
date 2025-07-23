import {ThreeDSMode} from "./gql.threeDSMode";
import {SDKParams} from "./gql.sDKParams";
import {Boolean} from "./gql.boolean";
import {String} from "./gql.string";
import {GooglePayButtonStyles} from "./gql.googlePayButtonStyles";
export type GooglePayConfig = {
	button_styles?: GooglePayButtonStyles // The styles for the GooglePay Button configuration
	code?: String // The payment method code as defined in the payment gateway
	is_visible?: Boolean // Indicates whether the payment method is displayed
	payment_intent?: String // Defines the payment intent (Authorize or Capture
	payment_source?: String // The payment source for the payment method
	sdk_params?: [SDKParams] // The PayPal parameters required to load the JS SDK
	sort_order?: String // The relative order the payment method is displayed on the checkout page
	three_ds_mode?: ThreeDSMode // 3DS mode
	title?: String // The name displayed for the payment method
}