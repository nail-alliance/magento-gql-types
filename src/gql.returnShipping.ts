import {ReturnShippingTracking} from "./gql.returnShippingTracking";
import {ReturnShippingAddress} from "./gql.returnShippingAddress";
export type ReturnShipping = {
	address?: ReturnShippingAddress // The merchant-defined return shipping address.
	tracking?: ReturnShippingTracking[] // The unique ID for a ReturnShippingTracking object. If a single UID is specified, the array contains a single tracking record. Otherwise, array contains all tracking information.
}