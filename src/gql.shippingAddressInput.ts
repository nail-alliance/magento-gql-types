import {String} from "./gql.string";
import {Int} from "./gql.int";
import {CartAddressInput} from "./gql.cartAddressInput";
export type ShippingAddressInput = {
	address?: CartAddressInput // Defines a shipping address.
	customer_address_id?: Int // An ID from the customer's address book that uniquely identifies the address to be used for shipping.
	customer_notes?: String // Text provided by the shopper.
	pickup_location_code?: String // The code of Pickup Location which will be used for In-Store Pickup.
}