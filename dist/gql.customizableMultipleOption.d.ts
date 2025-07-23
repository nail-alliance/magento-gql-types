import { CustomizableMultipleValue } from "./gql.customizableMultipleValue";
import { ID } from "./gql.ID";
import { String } from "./gql.string";
import { Boolean } from "./gql.boolean";
import { Int } from "./gql.int";
export type CustomizableMultipleOption = {
    /** @deprecated */
    option_id?: Int;
    required?: Boolean;
    sort_order?: Int;
    title?: String;
    uid: ID;
    value?: [CustomizableMultipleValue];
};
