import { String } from "./gql.string";
import { ID } from "./gql.ID";
export type CancelOrderInput = {
    order_id: ID;
    reason: String;
};
