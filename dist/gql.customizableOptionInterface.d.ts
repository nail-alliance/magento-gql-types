import { ID } from "./gql.ID";
import { String } from "./gql.string";
import { Boolean } from "./gql.boolean";
import { Int } from "./gql.int";
export interface CustomizableOptionInterface {
    /** @deprecated */
    option_id?: Int;
    required?: Boolean;
    sort_order?: Int;
    title?: String;
    uid: ID;
}
