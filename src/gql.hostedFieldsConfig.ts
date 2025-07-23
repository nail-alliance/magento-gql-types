import {ThreeDSMode} from "./gql.threeDSMode";
import {SDKParams} from "./gql.sDKParams";
import {Boolean} from "./gql.boolean";
import {String} from "./gql.string";
export type HostedFieldsConfig = {
	cc_vault_code?: String // Vault payment method code
	code?: String // The payment method code as defined in the payment gateway
	is_vault_enabled?: Boolean // Card vault enabled
	is_visible?: Boolean // Indicates whether the payment method is displayed
	payment_intent?: String // Defines the payment intent (Authorize or Capture
	payment_source?: String // The payment source for the payment method
	requires_card_details?: Boolean // Card and bin details required
	sdk_params?: SDKParams[] // The PayPal parameters required to load the JS SDK
	sort_order?: String // The relative order the payment method is displayed on the checkout page
	/** @deprecated */
	three_ds?: Boolean // Whether 3DS is activated; true if 3DS mode is not OFF. Use 'three_ds_mode' instead. Deprecated
	three_ds_mode?: ThreeDSMode // 3DS mode
	title?: String // The name displayed for the payment method
}