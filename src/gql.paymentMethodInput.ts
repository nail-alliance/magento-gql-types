import {PaypalExpressInput} from "./gql.paypalExpressInput";
import {VaultMethodInput} from "./gql.vaultMethodInput";
import {SmartButtonMethodInput} from "./gql.smartButtonMethodInput";
import {HostedFieldsInput} from "./gql.hostedFieldsInput";
import {GooglePayMethodInput} from "./gql.googlePayMethodInput";
import {ApplePayMethodInput} from "./gql.applePayMethodInput";
import {VaultTokenInput} from "./gql.vaultTokenInput";
import {PayflowProInput} from "./gql.payflowProInput";
import {PayflowLinkInput} from "./gql.payflowLinkInput";
import {PayflowExpressInput} from "./gql.payflowExpressInput";
import {HostedProInput} from "./gql.hostedProInput";
import {String} from "./gql.string";
import {BraintreeCcVaultInput} from "./gql.braintreeCcVaultInput";
import {BraintreeVaultInput} from "./gql.braintreeVaultInput";
import {BraintreeInput} from "./gql.braintreeInput";
export type PaymentMethodInput = {
	braintree?: BraintreeInput // 
	braintree_ach_direct_debit?: BraintreeInput // 
	braintree_ach_direct_debit_vault?: BraintreeVaultInput // 
	braintree_applepay_vault?: BraintreeVaultInput // 
	braintree_cc_vault?: BraintreeCcVaultInput // 
	braintree_googlepay_vault?: BraintreeVaultInput // 
	braintree_paypal?: BraintreeInput // 
	braintree_paypal_vault?: BraintreeVaultInput // 
	code: String // The internal name for the payment method.
	hosted_pro?: HostedProInput // Required input for PayPal Hosted pro payments.
	payflow_express?: PayflowExpressInput // Required input for Payflow Express Checkout payments.
	payflow_link?: PayflowLinkInput // Required input for PayPal Payflow Link and Payments Advanced payments.
	payflowpro?: PayflowProInput // Required input for PayPal Payflow Pro and Payment Pro payments.
	payflowpro_cc_vault?: VaultTokenInput // Required input for PayPal Payflow Pro vault payments.
	payment_services_paypal_apple_pay?: ApplePayMethodInput // Required input for Apple Pay button
	payment_services_paypal_google_pay?: GooglePayMethodInput // Required input for Google Pay button
	payment_services_paypal_hosted_fields?: HostedFieldsInput // Required input for Hosted Fields
	payment_services_paypal_smart_buttons?: SmartButtonMethodInput // Required input for Smart buttons
	payment_services_paypal_vault?: VaultMethodInput // Required input for vault
	paypal_express?: PaypalExpressInput // Required input for Express Checkout and Payments Standard payments.
	purchase_order_number?: String // The purchase order number. Optional for most payment methods.
}