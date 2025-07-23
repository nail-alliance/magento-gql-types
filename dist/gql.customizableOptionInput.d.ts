import { String } from "./gql.string";
import { ID } from "./gql.ID";
import { Int } from "./gql.int";
export type CustomizableOptionInput = {
    id?: Int;
    uid?: ID;
    value_string: String;
};
