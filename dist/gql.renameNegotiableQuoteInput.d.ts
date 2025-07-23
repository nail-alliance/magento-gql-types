import { ID } from "./gql.ID";
import { String } from "./gql.string";
export type RenameNegotiableQuoteInput = {
    quote_comment?: String;
    quote_name: String;
    quote_uid: ID;
};
