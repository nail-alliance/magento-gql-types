import { ID } from "./gql.ID";
import { Float } from "./gql.float";
import { ProductInterface } from "./gql.productInterface";
import { SelectedCustomizableOption } from "./gql.selectedCustomizableOption";
export type SimpleRequisitionListItem = {
    customizable_options: [SelectedCustomizableOption];
    product: ProductInterface;
    quantity: Float;
    uid: ID;
};
