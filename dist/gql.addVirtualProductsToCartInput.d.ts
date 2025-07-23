import { VirtualProductCartItemInput } from "./gql.virtualProductCartItemInput";
import { String } from "./gql.string";
export type AddVirtualProductsToCartInput = {
    cart_id: String;
    cart_items: VirtualProductCartItemInput[];
};
