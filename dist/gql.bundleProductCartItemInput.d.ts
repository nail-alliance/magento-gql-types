import { CartItemInput } from "./gql.cartItemInput";
import { CustomizableOptionInput } from "./gql.customizableOptionInput";
import { BundleOptionInput } from "./gql.bundleOptionInput";
export type BundleProductCartItemInput = {
    bundle_options: BundleOptionInput[];
    customizable_options?: CustomizableOptionInput[];
    data: CartItemInput;
};
