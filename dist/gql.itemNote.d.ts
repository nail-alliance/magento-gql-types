import { ID } from "./gql.ID";
import { Int } from "./gql.int";
import { String } from "./gql.string";
export type ItemNote = {
    created_at?: String;
    creator_id?: Int;
    creator_type?: Int;
    negotiable_quote_item_uid?: ID;
    note?: String;
    note_uid?: ID;
};
