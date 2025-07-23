import {DownloadableProductLinksInput} from "./gql.downloadableProductLinksInput";
import {CartItemInput} from "./gql.cartItemInput";
import {CustomizableOptionInput} from "./gql.customizableOptionInput";
export type DownloadableProductCartItemInput = {
	customizable_options?: CustomizableOptionInput[] // The ID and value of the option.
	data: CartItemInput // The quantity and SKU of the downloadable product.
	downloadable_product_links?: DownloadableProductLinksInput[] // An array of objects containing the link_id of the downloadable product link.
}