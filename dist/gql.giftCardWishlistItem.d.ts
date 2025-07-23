import { Float } from "./gql.float";
import { ProductInterface } from "./gql.productInterface";
import { ID } from "./gql.ID";
import { GiftCardOptions } from "./gql.giftCardOptions";
import { SelectedCustomizableOption } from "./gql.selectedCustomizableOption";
import { String } from "./gql.string";
export type GiftCardWishlistItem = {
    added_at: String;
    customizable_options: SelectedCustomizableOption[];
    description?: String;
    gift_card_options: GiftCardOptions;
    id: ID;
    product?: ProductInterface;
    quantity: Float;
};
