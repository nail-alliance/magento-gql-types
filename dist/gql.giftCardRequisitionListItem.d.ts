import { ID } from "./gql.ID";
import { Float } from "./gql.float";
import { ProductInterface } from "./gql.productInterface";
import { GiftCardOptions } from "./gql.giftCardOptions";
import { SelectedCustomizableOption } from "./gql.selectedCustomizableOption";
export type GiftCardRequisitionListItem = {
    customizable_options: [SelectedCustomizableOption];
    gift_card_options: GiftCardOptions;
    product: ProductInterface;
    quantity: Float;
    uid: ID;
};
