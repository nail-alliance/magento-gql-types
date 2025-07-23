import {ID} from "./gql.ID";
import {ReturnStatus} from "./gql.returnStatus";
import {ReturnShipping} from "./gql.returnShipping";
import {CustomerOrder} from "./gql.customerOrder";
import {ReturnItem} from "./gql.returnItem";
import {ReturnCustomer} from "./gql.returnCustomer";
import {String} from "./gql.string";
import {ReturnComment} from "./gql.returnComment";
import {ReturnShippingCarrier} from "./gql.returnShippingCarrier";
export type Return = {
	available_shipping_carriers?: ReturnShippingCarrier[] // A list of shipping carriers available for returns.
	comments?: ReturnComment[] // A list of comments posted for the return request.
	created_at: String // The date the return was requested.
	customer: ReturnCustomer // Data from the customer who created the return request.
	items?: ReturnItem[] // A list of items being returned.
	number: String // A human-readable return number.
	order?: CustomerOrder // The order associated with the return.
	shipping?: ReturnShipping // Shipping information for the return.
	status?: ReturnStatus // The status of the return request.
	uid: ID // The unique ID for a Return object.
}