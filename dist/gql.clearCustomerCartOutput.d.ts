import { Boolean } from "./gql.boolean";
import { Cart } from "./gql.cart";
export type ClearCustomerCartOutput = {
    cart?: Cart;
    status: Boolean;
};
