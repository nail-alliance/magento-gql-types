import {String} from "./gql.string";
import {ID} from "./gql.ID";
export type AddReturnTrackingInput = {
	carrier_uid: ID // The unique ID for a ReturnShippingCarrier object.
	return_uid: ID // The unique ID for a Returns object.
	tracking_number: String // The shipping tracking number for this return request.
}