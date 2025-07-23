import { ID } from "./gql.ID";
import { String } from "./gql.string";
export type ConfirmCancelOrderInput = {
    confirmation_key: String;
    order_id: ID;
};
