import { SwatchData } from "./gql.swatchData";
import { String } from "./gql.string";
import { Int } from "./gql.int";
export type SwatchLayerFilterItem = {
    /** @deprecated */
    items_count?: Int;
    /** @deprecated */
    label?: String;
    swatch_data?: SwatchData;
    /** @deprecated */
    value_string?: String;
};
