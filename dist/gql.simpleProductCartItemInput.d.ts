import { CartItemInput } from "./gql.cartItemInput";
import { CustomizableOptionInput } from "./gql.customizableOptionInput";
export type SimpleProductCartItemInput = {
    customizable_options?: [CustomizableOptionInput];
    data: CartItemInput;
};
