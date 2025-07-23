import {SmartButtonsConfig} from "./gql.smartButtonsConfig";
import {HostedFieldsConfig} from "./gql.hostedFieldsConfig";
import {GooglePayConfig} from "./gql.googlePayConfig";
import {ApplePayConfig} from "./gql.applePayConfig";
export type PaymentConfigOutput = {
	apple_pay?: ApplePayConfig // ApplePay payment method configuration
	google_pay?: GooglePayConfig // GooglePay payment method configuration
	hosted_fields?: HostedFieldsConfig // Hosted fields payment method configuration
	smart_buttons?: SmartButtonsConfig // Smart Buttons payment method configuration
}