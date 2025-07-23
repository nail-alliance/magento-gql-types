import {ReturnShippingTracking} from "./gql.returnShippingTracking";
import {Return} from "./gql.return";
export type AddReturnTrackingOutput = {
	return?: Return // Details about the modified return.
	return_shipping_tracking?: ReturnShippingTracking // Details about shipping for a return.
}