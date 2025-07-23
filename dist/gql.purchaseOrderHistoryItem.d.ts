import { ID } from "./gql.ID";
import { String } from "./gql.string";
export type PurchaseOrderHistoryItem = {
    activity: String;
    created_at: String;
    message: String;
    uid: ID;
};
