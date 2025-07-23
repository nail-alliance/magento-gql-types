import {String} from "./gql.string";
import {Money} from "./gql.money";
export type SelectedShippingMethod = {
	amount: Money // The cost of shipping using this shipping method.
	/** @deprecated */
	base_amount?: Money // The field should not be used on the storefront. Deprecated
	carrier_code: String // A string that identifies a commercial carrier or an offline shipping method.
	carrier_title: String // The label for the carrier code.
	method_code: String // A shipping method code associated with a carrier.
	method_title: String // The label for the method code.
	price_excl_tax: Money // The cost of shipping using this shipping method, excluding tax.
	price_incl_tax: Money // The cost of shipping using this shipping method, including tax.
}