import { ProductInterface } from "./gql.productInterface";
import { ID } from "./gql.ID";
import { SelectedCustomizableOption } from "./gql.selectedCustomizableOption";
export interface RequisitionListItemInterface {
    "customizable_options": SelectedCustomizableOption[];
    "product": ProductInterface;
    "quantity": number;
    "uid": ID;
}
