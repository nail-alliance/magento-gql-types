import { SimpleProductCartItemInput } from "./gql.simpleProductCartItemInput";
import { String } from "./gql.string";
export type AddSimpleProductsToCartInput = {
    cart_id: String;
    cart_items: [SimpleProductCartItemInput];
};
