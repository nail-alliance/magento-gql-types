import {CustomerOrder} from "./gql.customerOrder";
import {Order} from "./gql.order";
import {PlaceOrderError} from "./gql.placeOrderError";
export type PlaceOrderOutput = {
	errors: PlaceOrderError[] // An array of place order errors.
	/** @deprecated */
	order?: Order // The ID of the order. Use orderV2 instead. Deprecated
	orderV2?: CustomerOrder // Full order information.
}