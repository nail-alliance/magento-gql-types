import { BundleProductCartItemInput } from "./gql.bundleProductCartItemInput";
import { String } from "./gql.string";
export type AddBundleProductsToCartInput = {
    cart_id: String;
    cart_items: BundleProductCartItemInput[];
};
