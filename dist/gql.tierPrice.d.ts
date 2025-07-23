import { Float } from "./gql.float";
import { Money } from "./gql.money";
import { ProductDiscount } from "./gql.productDiscount";
export type TierPrice = {
    discount?: ProductDiscount;
    final_price?: Money;
    quantity?: Float;
};
