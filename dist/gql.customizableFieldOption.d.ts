import { CustomizableFieldValue } from "./gql.customizableFieldValue";
import { ID } from "./gql.ID";
import { Boolean } from "./gql.boolean";
import { String } from "./gql.string";
import { Int } from "./gql.int";
export type CustomizableFieldOption = {
    /** @deprecated */
    option_id?: Int;
    product_sku?: String;
    required?: Boolean;
    sort_order?: Int;
    title?: String;
    uid: ID;
    value?: CustomizableFieldValue;
};
