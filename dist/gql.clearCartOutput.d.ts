import { ClearCartError } from "./gql.clearCartError";
import { Cart } from "./gql.cart";
export type ClearCartOutput = {
    cart?: Cart;
    errors?: [ClearCartError];
};
