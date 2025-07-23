import { ID } from "./gql.ID";
import { DownloadableProductSamples } from "./gql.downloadableProductSamples";
import { Float } from "./gql.float";
import { ProductInterface } from "./gql.productInterface";
import { DownloadableProductLinks } from "./gql.downloadableProductLinks";
import { SelectedCustomizableOption } from "./gql.selectedCustomizableOption";
export type DownloadableRequisitionListItem = {
    customizable_options: [SelectedCustomizableOption];
    links?: [DownloadableProductLinks];
    product: ProductInterface;
    quantity: Float;
    samples?: [DownloadableProductSamples];
    uid: ID;
};
