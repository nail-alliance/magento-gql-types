import { ConfigurableProductOptionsValues } from "./gql.configurableProductOptionsValues";
import { Boolean } from "./gql.boolean";
import { ID } from "./gql.ID";
import { Int } from "./gql.int";
import { String } from "./gql.string";
export type ConfigurableProductOptions = {
    attribute_code?: String;
    /** @deprecated */
    attribute_id?: String;
    /** @deprecated */
    attribute_id_v2?: Int;
    attribute_uid: ID;
    /** @deprecated */
    id?: Int;
    label?: String;
    position?: Int;
    /** @deprecated */
    product_id?: Int;
    uid: ID;
    use_default?: Boolean;
    values?: [ConfigurableProductOptionsValues];
};
