import {ID} from "./gql.ID";
import {DownloadableProductSamples} from "./gql.downloadableProductSamples";
import {Float} from "./gql.float";
import {ProductInterface} from "./gql.productInterface";
import {DownloadableProductLinks} from "./gql.downloadableProductLinks";
import {SelectedCustomizableOption} from "./gql.selectedCustomizableOption";
export type DownloadableRequisitionListItem = {
	customizable_options: [SelectedCustomizableOption] // Selected custom options for an item in the requisition list.
	links?: [DownloadableProductLinks] // An array of links for downloadable products in the requisition list.
	product: ProductInterface // Details about a requisition list item.
	quantity: Float // The quantity of the product added to the requisition list.
	samples?: [DownloadableProductSamples] // An array of links to downloadable product samples.
	uid: ID // The unique ID of an item in a requisition list.
}