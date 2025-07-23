import { ID } from "./gql.ID";
import { SwatchDataInterface } from "./gql.swatchDataInterface";
import { String } from "./gql.string";
import { Boolean } from "./gql.boolean";
export type ConfigurableProductOptionValue = {
    is_available: Boolean;
    is_use_default: Boolean;
    label: String;
    swatch?: SwatchDataInterface;
    uid: ID;
};
