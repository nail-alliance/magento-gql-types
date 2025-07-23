import { DownloadableProductCartItemInput } from "./gql.downloadableProductCartItemInput";
import { String } from "./gql.string";
export type AddDownloadableProductsToCartInput = {
    cart_id: String;
    cart_items: [DownloadableProductCartItemInput];
};
