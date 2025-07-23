import { ReturnShippingTracking } from "./gql.returnShippingTracking";
import { Return } from "./gql.return";
export type AddReturnTrackingOutput = {
    return?: Return;
    return_shipping_tracking?: ReturnShippingTracking;
};
