import { ID } from "./gql.ID";
import { String } from "./gql.string";
export type ReturnComment = {
    author_name: String;
    created_at: String;
    text: String;
    uid: ID;
};
