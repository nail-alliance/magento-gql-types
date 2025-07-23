import {ID} from "./gql.ID";
import {String} from "./gql.string";
import {ReturnShippingTrackingStatus} from "./gql.returnShippingTrackingStatus";
import {ReturnShippingCarrier} from "./gql.returnShippingCarrier";
export type ReturnShippingTracking = {
	carrier: ReturnShippingCarrier // Contains details of a shipping carrier.
	status?: ReturnShippingTrackingStatus // Details about the status of a shipment.
	tracking_number: String // A tracking number assigned by the carrier.
	uid: ID // The unique ID for a ReturnShippingTracking object assigned to the tracking item.
}