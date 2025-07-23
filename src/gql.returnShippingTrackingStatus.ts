import {ReturnShippingTrackingStatusType} from "./gql.returnShippingTrackingStatusType";
import {String} from "./gql.string";
export type ReturnShippingTrackingStatus = {
	text: String // Text that describes the status.
	type: ReturnShippingTrackingStatusType // Indicates whether the status type is informational or an error.
}