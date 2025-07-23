import { ReturnShippingTracking } from "./gql.returnShippingTracking";
import { ReturnShippingAddress } from "./gql.returnShippingAddress";
export type ReturnShipping = {
    address?: ReturnShippingAddress;
    tracking?: ReturnShippingTracking[];
};
