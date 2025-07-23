import { ID } from "./gql.ID";
import { String } from "./gql.string";
import { Boolean } from "./gql.boolean";
import { PriceRange } from "./gql.priceRange";
import { BundleItemOption } from "./gql.bundleItemOption";
import { Int } from "./gql.int";
export type BundleItem = {
    /** @deprecated */
    option_id?: Int;
    options?: BundleItemOption[];
    position?: Int;
    price_range: PriceRange;
    required?: Boolean;
    sku?: String;
    title?: String;
    type?: String;
    uid?: ID;
};
