import { String } from "./gql.string";
import { ID } from "./gql.ID";
export type AddReturnTrackingInput = {
    carrier_uid: ID;
    return_uid: ID;
    tracking_number: String;
};
