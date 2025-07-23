import {ShippingMethodInput} from "./gql.shippingMethodInput";
import {String} from "./gql.string";
export type SetShippingMethodsOnCartInput = {
	cart_id: String // The unique ID of a Cart object.
	shipping_methods: ShippingMethodInput[] // An array of shipping methods.
}