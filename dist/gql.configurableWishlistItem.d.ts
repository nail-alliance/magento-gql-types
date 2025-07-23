import { Float } from "./gql.float";
import { ID } from "./gql.ID";
import { SelectedCustomizableOption } from "./gql.selectedCustomizableOption";
import { ProductInterface } from "./gql.productInterface";
import { SelectedConfigurableOption } from "./gql.selectedConfigurableOption";
import { String } from "./gql.string";
export type ConfigurableWishlistItem = {
    added_at: String;
    /** @deprecated */
    child_sku: String;
    configurable_options?: SelectedConfigurableOption[];
    configured_variant?: ProductInterface;
    customizable_options: SelectedCustomizableOption[];
    description?: String;
    id: ID;
    product?: ProductInterface;
    quantity: Float;
};
