import {ID} from "./gql.ID";
import {String} from "./gql.string";
export type ReturnShippingCarrier = {
	label: String // A description of the shipping carrier.
	uid: ID // The unique ID for a ReturnShippingCarrier object assigned to the shipping carrier.
}