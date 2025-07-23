import {ShippingAddressInput} from "./gql.shippingAddressInput";
import {String} from "./gql.string";
export type SetShippingAddressesOnCartInput = {
	cart_id: String // The unique ID of a Cart object.
	shipping_addresses: [ShippingAddressInput] // An array of shipping addresses.
}