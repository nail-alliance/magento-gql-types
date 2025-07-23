import { DownloadableProductSamples } from "./gql.downloadableProductSamples";
import { Float } from "./gql.float";
import { ProductInterface } from "./gql.productInterface";
import { DownloadableProductLinks } from "./gql.downloadableProductLinks";
import { ID } from "./gql.ID";
import { SelectedCustomizableOption } from "./gql.selectedCustomizableOption";
import { String } from "./gql.string";
export type DownloadableWishlistItem = {
    added_at: String;
    customizable_options: [SelectedCustomizableOption];
    description?: String;
    id: ID;
    links_v2?: [DownloadableProductLinks];
    product?: ProductInterface;
    quantity: Float;
    samples?: [DownloadableProductSamples];
};
