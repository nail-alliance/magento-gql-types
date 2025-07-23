import { CustomizableDateValue } from "./gql.customizableDateValue";
import { ID } from "./gql.ID";
import { Boolean } from "./gql.boolean";
import { String } from "./gql.string";
import { Int } from "./gql.int";
export type CustomizableDateOption = {
    /** @deprecated */
    option_id?: Int;
    product_sku?: String;
    required?: Boolean;
    sort_order?: Int;
    title?: String;
    uid: ID;
    value?: CustomizableDateValue;
};
