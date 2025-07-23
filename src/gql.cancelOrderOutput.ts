import {CustomerOrder} from "./gql.customerOrder";
import {CancelOrderError} from "./gql.cancelOrderError";
import {String} from "./gql.string";
export type CancelOrderOutput = {
	error?: String // Error encountered while cancelling the order.
	errorV2?: CancelOrderError // 
	order?: CustomerOrder // Updated customer order.
}