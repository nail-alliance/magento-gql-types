import { ID } from "./gql.ID";
import { String } from "./gql.string";
import { PriceTypeEnum } from "./gql.priceTypeEnum";
import { Float } from "./gql.float";
import { Int } from "./gql.int";
export type CustomizableMultipleValue = {
    option_type_id?: Int;
    price?: Float;
    price_type?: PriceTypeEnum;
    sku?: String;
    sort_order?: Int;
    title?: String;
    uid: ID;
};
