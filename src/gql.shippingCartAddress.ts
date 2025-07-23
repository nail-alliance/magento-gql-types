import {SelectedShippingMethod} from "./gql.selectedShippingMethod";
import {Boolean} from "./gql.boolean";
import {CartAddressRegion} from "./gql.cartAddressRegion";
import {Float} from "./gql.float";
import {Int} from "./gql.int";
import {AttributeValueInterface} from "./gql.attributeValueInterface";
import {CartAddressCountry} from "./gql.cartAddressCountry";
import {String} from "./gql.string";
import {CartItemInterface} from "./gql.cartItemInterface";
import {CartItemQuantity} from "./gql.cartItemQuantity";
import {AvailableShippingMethod} from "./gql.availableShippingMethod";
export type ShippingCartAddress = {
	available_shipping_methods?: AvailableShippingMethod[] // An array that lists the shipping methods that can be applied to the cart.
	/** @deprecated */
	cart_items?: CartItemQuantity[] // Use cart_items_v2 instead. Deprecated
	cart_items_v2?: CartItemInterface[] // An array that lists the items in the cart.
	city: String // The city specified for the billing or shipping address.
	company?: String // The company specified for the billing or shipping address.
	country: CartAddressCountry // An object containing the country label and code.
	custom_attributes: AttributeValueInterface[] // The custom attribute values of the billing or shipping address.
	customer_notes?: String // Text provided by the shopper.
	fax?: String // The customer's fax number.
	firstname: String // The first name of the customer or guest.
	id?: Int // Id of the customer address.
	/** @deprecated */
	items_weight?: Float // This information should not be exposed on the frontend. Deprecated
	lastname: String // The last name of the customer or guest.
	middlename?: String // The middle name of the person associated with the billing/shipping address.
	pickup_location_code?: String // 
	postcode?: String // The ZIP or postal code of the billing or shipping address.
	prefix?: String // An honorific, such as Dr., Mr., or Mrs.
	region?: CartAddressRegion // An object containing the region label and code.
	same_as_billing: Boolean // Indicates whether the shipping address is same as billing address.
	selected_shipping_method?: SelectedShippingMethod // An object that describes the selected shipping method.
	street: String[] // An array containing the street for the billing or shipping address.
	suffix?: String // A value such as Sr., Jr., or III.
	telephone?: String // The telephone number for the billing or shipping address.
	uid: String // The unique id of the customer address.
	vat_id?: String // The VAT company number for billing or shipping address.
}