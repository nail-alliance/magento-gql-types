import { ID } from "./gql.ID";
export type RemoveNegotiableQuoteItemsInput = {
    quote_item_uids: [ID];
    quote_uid: ID;
};
