import { ProductDiscount } from "./gql.productDiscount";
import { Money } from "./gql.money";
export type TierPrice = {
    "discount"?: ProductDiscount | null | undefined;
    "final_price"?: Money | null | undefined;
    "quantity"?: number | null | undefined;
};
