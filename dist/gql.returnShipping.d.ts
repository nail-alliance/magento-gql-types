import { ReturnShippingAddress } from "./gql.returnShippingAddress";
import { ReturnShippingTracking } from "./gql.returnShippingTracking";
export type ReturnShipping = {
    "address"?: ReturnShippingAddress | null | undefined;
    "tracking"?: ReturnShippingTracking[] | null | undefined;
};
