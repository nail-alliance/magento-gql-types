import { ReturnShippingTrackingStatus } from "./gql.returnShippingTrackingStatus";
import { ID } from "./gql.ID";
import { ReturnShippingCarrier } from "./gql.returnShippingCarrier";
export type ReturnShippingTracking = {
    "carrier": ReturnShippingCarrier;
    "status"?: ReturnShippingTrackingStatus | null | undefined;
    "tracking_number": string;
    "uid": ID;
};
