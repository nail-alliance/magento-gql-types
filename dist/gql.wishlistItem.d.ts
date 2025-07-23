import { Float } from "./gql.float";
import { ProductInterface } from "./gql.productInterface";
import { Int } from "./gql.int";
import { String } from "./gql.string";
export type WishlistItem = {
    added_at?: String;
    description?: String;
    id?: Int;
    product?: ProductInterface;
    qty?: Float;
};
