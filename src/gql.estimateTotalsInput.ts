import {ShippingMethodInput} from "./gql.shippingMethodInput";
import {String} from "./gql.string";
import {EstimateAddressInput} from "./gql.estimateAddressInput";
export type EstimateTotalsInput = {
	address: EstimateAddressInput // Customer's address to estimate totals.
	cart_id: String // The unique ID of the cart to query.
	shipping_method?: ShippingMethodInput // Selected shipping method to estimate totals.
}