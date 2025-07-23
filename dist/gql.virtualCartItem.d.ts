import { ID } from "./gql.ID";
import { ProductInterface } from "./gql.productInterface";
import { CartItemPrices } from "./gql.cartItemPrices";
import { ItemNote } from "./gql.itemNote";
import { Float } from "./gql.float";
import { Boolean } from "./gql.boolean";
import { String } from "./gql.string";
import { CartItemError } from "./gql.cartItemError";
import { Discount } from "./gql.discount";
import { SelectedCustomizableOption } from "./gql.selectedCustomizableOption";
export type VirtualCartItem = {
    customizable_options: SelectedCustomizableOption[];
    discount?: Discount[];
    errors?: CartItemError[];
    /** @deprecated */
    id: String;
    is_available: Boolean;
    max_qty?: Float;
    min_qty?: Float;
    not_available_message?: String;
    note_from_buyer?: ItemNote[];
    note_from_seller?: ItemNote[];
    prices?: CartItemPrices;
    product: ProductInterface;
    quantity: Float;
    uid: ID;
};
