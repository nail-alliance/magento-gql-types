import { Discount } from "./gql.discount";
import { CartItemError } from "./gql.cartItemError";
import { ItemNote } from "./gql.itemNote";
import { CartItemPrices } from "./gql.cartItemPrices";
import { ProductInterface } from "./gql.productInterface";
import { ID } from "./gql.ID";
export interface CartItemInterface {
    "discount"?: Discount[] | null | undefined;
    "errors"?: CartItemError[] | null | undefined;
    /** @deprecated */
    "id": string;
    "is_available": boolean;
    "max_qty"?: number | null | undefined;
    "min_qty"?: number | null | undefined;
    "not_available_message": string;
    "note_from_buyer"?: ItemNote[] | null | undefined;
    "note_from_seller"?: ItemNote[] | null | undefined;
    "prices"?: CartItemPrices | null | undefined;
    "product": ProductInterface;
    "quantity": number;
    "uid": ID;
}
