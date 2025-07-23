import { ID } from "./gql.ID";
import { Float } from "./gql.float";
import { ProductInterface } from "./gql.productInterface";
import { SelectedCustomizableOption } from "./gql.selectedCustomizableOption";
import { SelectedBundleOption } from "./gql.selectedBundleOption";
export type BundleRequisitionListItem = {
    bundle_options: SelectedBundleOption[];
    customizable_options: SelectedCustomizableOption[];
    product: ProductInterface;
    quantity: Float;
    uid: ID;
};
