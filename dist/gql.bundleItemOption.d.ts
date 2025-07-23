import { ID } from "./gql.ID";
import { ProductInterface } from "./gql.productInterface";
import { PriceTypeEnum } from "./gql.priceTypeEnum";
import { Float } from "./gql.float";
import { String } from "./gql.string";
import { Int } from "./gql.int";
import { Boolean } from "./gql.boolean";
export type BundleItemOption = {
    can_change_quantity?: Boolean;
    /** @deprecated */
    id?: Int;
    is_default?: Boolean;
    label?: String;
    position?: Int;
    price?: Float;
    price_type?: PriceTypeEnum;
    product?: ProductInterface;
    /** @deprecated */
    qty?: Float;
    quantity?: Float;
    uid: ID;
};
