import { Money } from "./gql.money";
import { GiftWrappingImage } from "./gql.giftWrappingImage";
import { ID } from "./gql.ID";
import { String } from "./gql.string";
export type GiftWrapping = {
    design: String;
    /** @deprecated */
    id: ID;
    image?: GiftWrappingImage;
    price: Money;
    uid: ID;
};
