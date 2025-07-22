import { ID } from "./gql.ID";
export type ItemNote = {
    "created_at"?: string | null | undefined;
    "creator_id"?: number | null | undefined;
    "creator_type"?: number | null | undefined;
    "negotiable_quote_item_uid"?: ID | null | undefined;
    "note"?: string | null | undefined;
    "note_uid"?: ID | null | undefined;
};
