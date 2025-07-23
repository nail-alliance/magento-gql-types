import { ID } from "./gql.ID";
import { Int } from "./gql.int";
import { RequistionListItems } from "./gql.requistionListItems";
import { String } from "./gql.string";
export type RequisitionList = {
    description?: String;
    items?: RequistionListItems;
    items_count: Int;
    name: String;
    uid: ID;
    updated_at?: String;
};
