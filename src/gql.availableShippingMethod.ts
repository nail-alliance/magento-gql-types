import {String} from "./gql.string";
import {Boolean} from "./gql.boolean";
import {Money} from "./gql.money";
export type AvailableShippingMethod = {
	amount: Money // The cost of shipping using this shipping method.
	available: Boolean // Indicates whether this shipping method can be applied to the cart.
	/** @deprecated */
	base_amount?: Money // Deprecated The field should not be used on the storefront.
	carrier_code: String // A string that identifies a commercial carrier or an offline shipping method.
	carrier_title: String // The label for the carrier code.
	error_message?: String // Describes an error condition.
	method_code?: String // A shipping method code associated with a carrier. The value could be null if no method is available.
	method_title?: String // The label for the shipping method code. The value could be null if no method is available.
	price_excl_tax: Money // The cost of shipping using this shipping method, excluding tax.
	price_incl_tax: Money // The cost of shipping using this shipping method, including tax.
}