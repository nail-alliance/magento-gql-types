import { String } from "./gql.string";
import { Int } from "./gql.int";
import { ID } from "./gql.ID";
export type SelectedConfigurableOption = {
    configurable_product_option_uid: ID;
    configurable_product_option_value_uid: ID;
    /** @deprecated */
    id: Int;
    option_label: String;
    /** @deprecated */
    value_id: Int;
    value_label: String;
};
