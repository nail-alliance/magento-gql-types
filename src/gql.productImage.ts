import {Int} from "./gql.int";
import {String} from "./gql.string";
import {Boolean} from "./gql.boolean";
export type ProductImage = {
	disabled?: Boolean // Indicates whether the image is hidden from view.
	label?: String // The label of the product image or video.
	position?: Int // The media item's position after it has been sorted.
	url?: String // The URL of the product image or video.
}