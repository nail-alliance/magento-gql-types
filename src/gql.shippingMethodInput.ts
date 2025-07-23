import {String} from "./gql.string";
export type ShippingMethodInput = {
	carrier_code: String // A string that identifies a commercial carrier or an offline delivery method.
	method_code: String // A string that indicates which service a commercial carrier will use to ship items. For offline delivery methods, this value is similar to the label displayed on the checkout page.
}