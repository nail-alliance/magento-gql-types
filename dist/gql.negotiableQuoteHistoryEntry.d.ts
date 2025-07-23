import { ID } from "./gql.ID";
import { String } from "./gql.string";
import { NegotiableQuoteHistoryChanges } from "./gql.negotiableQuoteHistoryChanges";
import { NegotiableQuoteHistoryEntryChangeType } from "./gql.negotiableQuoteHistoryEntryChangeType";
import { NegotiableQuoteUser } from "./gql.negotiableQuoteUser";
export type NegotiableQuoteHistoryEntry = {
    author: NegotiableQuoteUser;
    change_type: NegotiableQuoteHistoryEntryChangeType;
    changes?: NegotiableQuoteHistoryChanges;
    created_at?: String;
    uid: ID;
};
