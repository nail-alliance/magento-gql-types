import { String } from "./gql.string";
import { ID } from "./gql.ID";
export type QuoteTemplateLineItemNoteInput = {
    item_id: ID;
    note?: String;
    templateId: ID;
};
