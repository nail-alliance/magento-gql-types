import { ID } from "./gql.ID";
import { String } from "./gql.string";
export type LineItemNoteInput = {
    note?: String;
    quote_item_uid: ID;
    quote_uid: ID;
};
