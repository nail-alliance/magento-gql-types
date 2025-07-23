import { Float } from "./gql.float";
import { ProductInterface } from "./gql.productInterface";
import { ID } from "./gql.ID";
import { SelectedCustomizableOption } from "./gql.selectedCustomizableOption";
import { SelectedBundleOption } from "./gql.selectedBundleOption";
import { String } from "./gql.string";
export type BundleWishlistItem = {
    added_at: String;
    bundle_options?: SelectedBundleOption[];
    customizable_options: SelectedCustomizableOption[];
    description?: String;
    id: ID;
    product?: ProductInterface;
    quantity: Float;
};
