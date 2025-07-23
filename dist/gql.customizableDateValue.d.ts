import { ID } from "./gql.ID";
import { CustomizableDateTypeEnum } from "./gql.customizableDateTypeEnum";
import { String } from "./gql.string";
import { PriceTypeEnum } from "./gql.priceTypeEnum";
import { Float } from "./gql.float";
export type CustomizableDateValue = {
    price?: Float;
    price_type?: PriceTypeEnum;
    sku?: String;
    type?: CustomizableDateTypeEnum;
    uid: ID;
};
