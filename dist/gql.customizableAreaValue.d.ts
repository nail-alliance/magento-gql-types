import { ID } from "./gql.ID";
import { String } from "./gql.string";
import { PriceTypeEnum } from "./gql.priceTypeEnum";
import { Float } from "./gql.float";
import { Int } from "./gql.int";
export type CustomizableAreaValue = {
    max_characters?: Int;
    price?: Float;
    price_type?: PriceTypeEnum;
    sku?: String;
    uid: ID;
};
