import { Float } from "./gql.float";
import { String } from "./gql.string";
import { PriceTypeEnum } from "./gql.priceTypeEnum";
export type CartItemSelectedOptionValuePrice = {
    type: PriceTypeEnum;
    units: String;
    value: Float;
};
