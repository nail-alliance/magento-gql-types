import { Float } from "./gql.float";
import { ProductInterface } from "./gql.productInterface";
import { ID } from "./gql.ID";
import { SelectedCustomizableOption } from "./gql.selectedCustomizableOption";
import { String } from "./gql.string";
export type VirtualWishlistItem = {
    added_at: String;
    customizable_options: [SelectedCustomizableOption];
    description?: String;
    id: ID;
    product?: ProductInterface;
    quantity: Float;
};
