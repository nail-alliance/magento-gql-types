import { String } from "./gql.string";
import { CartItemInput } from "./gql.cartItemInput";
import { CustomizableOptionInput } from "./gql.customizableOptionInput";
export type ConfigurableProductCartItemInput = {
    customizable_options?: [CustomizableOptionInput];
    data: CartItemInput;
    parent_sku?: String;
    variant_sku?: String;
};
