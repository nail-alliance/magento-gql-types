import { Int } from "./gql.int";
import { Boolean } from "./gql.boolean";
import { ID } from "./gql.ID";
import { SwatchDataInterface } from "./gql.swatchDataInterface";
import { String } from "./gql.string";
export type ConfigurableProductOptionsValues = {
    default_label?: String;
    label?: String;
    store_label?: String;
    swatch_data?: SwatchDataInterface;
    uid?: ID;
    use_default_value?: Boolean;
    /** @deprecated */
    value_index?: Int;
};
