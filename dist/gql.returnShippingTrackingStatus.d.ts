import { ReturnShippingTrackingStatusType } from "./gql.returnShippingTrackingStatusType";
import { String } from "./gql.string";
export type ReturnShippingTrackingStatus = {
    text: String;
    type: ReturnShippingTrackingStatusType;
};
