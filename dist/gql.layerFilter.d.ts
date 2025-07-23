import { String } from "./gql.string";
import { Int } from "./gql.int";
import { LayerFilterItemInterface } from "./gql.layerFilterItemInterface";
export type LayerFilter = {
    /** @deprecated */
    filter_items?: [LayerFilterItemInterface];
    /** @deprecated */
    filter_items_count?: Int;
    /** @deprecated */
    name?: String;
    /** @deprecated */
    request_var?: String;
};
