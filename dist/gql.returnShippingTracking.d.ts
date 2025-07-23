import { ID } from "./gql.ID";
import { String } from "./gql.string";
import { ReturnShippingTrackingStatus } from "./gql.returnShippingTrackingStatus";
import { ReturnShippingCarrier } from "./gql.returnShippingCarrier";
export type ReturnShippingTracking = {
    carrier: ReturnShippingCarrier;
    status?: ReturnShippingTrackingStatus;
    tracking_number: String;
    uid: ID;
};
