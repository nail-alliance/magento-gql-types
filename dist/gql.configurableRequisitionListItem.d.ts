import { ID } from "./gql.ID";
import { Float } from "./gql.float";
import { ProductInterface } from "./gql.productInterface";
import { SelectedCustomizableOption } from "./gql.selectedCustomizableOption";
import { SelectedConfigurableOption } from "./gql.selectedConfigurableOption";
export type ConfigurableRequisitionListItem = {
    configurable_options?: [SelectedConfigurableOption];
    customizable_options: [SelectedCustomizableOption];
    product: ProductInterface;
    quantity: Float;
    uid: ID;
};
