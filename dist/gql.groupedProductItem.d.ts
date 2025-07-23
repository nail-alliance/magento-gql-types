import { Float } from "./gql.float";
import { ProductInterface } from "./gql.productInterface";
import { Int } from "./gql.int";
export type GroupedProductItem = {
    position?: Int;
    product?: ProductInterface;
    qty?: Float;
};
