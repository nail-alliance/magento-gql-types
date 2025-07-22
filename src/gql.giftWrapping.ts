import {Money} from "./gql.money";
import {ID} from "./gql.ID";
import {GiftWrappingImage} from "./gql.giftWrappingImage";

export type GiftWrapping = {
    "design": string;
    "image"?: GiftWrappingImage | null | undefined
    "price": Money;
    "uid": ID
}