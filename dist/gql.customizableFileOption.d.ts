import { CustomizableFileValue } from "./gql.customizableFileValue";
import { ID } from "./gql.ID";
import { Boolean } from "./gql.boolean";
import { String } from "./gql.string";
import { Int } from "./gql.int";
export type CustomizableFileOption = {
    /** @deprecated */
    option_id?: Int;
    product_sku?: String;
    required?: Boolean;
    sort_order?: Int;
    title?: String;
    uid: ID;
    value?: CustomizableFileValue;
};
