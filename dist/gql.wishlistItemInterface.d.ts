import { SelectedCustomizableOption } from "./gql.selectedCustomizableOption";
import { ID } from "./gql.ID";
import { ProductInterface } from "./gql.productInterface";
export interface WishlistItemInterface {
    "added_at": string;
    "customizable_options": SelectedCustomizableOption[];
    "description"?: string | null | undefined;
    "id": ID;
    "product"?: ProductInterface | null | undefined;
    "quantity": number;
}
