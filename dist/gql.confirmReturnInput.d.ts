import { ID } from "./gql.ID";
import { String } from "./gql.string";
export type ConfirmReturnInput = {
    confirmation_key: String;
    order_id: ID;
};
