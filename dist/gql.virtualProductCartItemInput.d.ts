import { CartItemInput } from "./gql.cartItemInput";
import { CustomizableOptionInput } from "./gql.customizableOptionInput";
export type VirtualProductCartItemInput = {
    customizable_options?: CustomizableOptionInput[];
    data: CartItemInput;
};
