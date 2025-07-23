import {Money} from "./gql.money";
import {GiftWrappingImage} from "./gql.giftWrappingImage";
import {ID} from "./gql.ID";
import {String} from "./gql.string";
export type GiftWrapping = {
	design: String // The name of the gift wrapping design.
	/** @deprecated */
	id: ID // The unique ID for a GiftWrapping object. Use uid instead Deprecated
	image?: GiftWrappingImage // The preview image for a gift wrapping option.
	price: Money // The gift wrapping price.
	uid: ID // The unique ID for a GiftWrapping object.
}