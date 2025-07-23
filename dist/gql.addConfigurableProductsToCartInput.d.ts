import { ConfigurableProductCartItemInput } from "./gql.configurableProductCartItemInput";
import { String } from "./gql.string";
export type AddConfigurableProductsToCartInput = {
    cart_id: String;
    cart_items: ConfigurableProductCartItemInput[];
};
