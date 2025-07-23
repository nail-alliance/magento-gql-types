import { ID } from "./gql.ID";
import { String } from "./gql.string";
export type NoSuchEntityUidError = {
    message: String;
    uid: ID;
};
