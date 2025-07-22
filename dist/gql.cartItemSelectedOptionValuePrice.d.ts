import { PriceTypeEnum } from "./gql.priceTypeEnum";
export type CartItemSelectedOptionValuePrice = {
    "type": PriceTypeEnum;
    "units": string;
    "value": number;
};
