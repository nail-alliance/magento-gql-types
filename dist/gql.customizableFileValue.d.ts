import { ID } from "./gql.ID";
import { PriceTypeEnum } from "./gql.priceTypeEnum";
import { Float } from "./gql.float";
import { Int } from "./gql.int";
import { String } from "./gql.string";
export type CustomizableFileValue = {
    file_extension?: String;
    image_size_x?: Int;
    image_size_y?: Int;
    price?: Float;
    price_type?: PriceTypeEnum;
    sku?: String;
    uid: ID;
};
