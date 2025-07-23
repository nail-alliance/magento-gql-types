import { DownloadableProductLinksInput } from "./gql.downloadableProductLinksInput";
import { CartItemInput } from "./gql.cartItemInput";
import { CustomizableOptionInput } from "./gql.customizableOptionInput";
export type DownloadableProductCartItemInput = {
    customizable_options?: CustomizableOptionInput[];
    data: CartItemInput;
    downloadable_product_links?: DownloadableProductLinksInput[];
};
