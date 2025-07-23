import {String} from "./gql.string";
export type ImageSwatchData = {
	thumbnail?: String // The URL assigned to the thumbnail of the swatch image.
	value?: String // The value can be represented as color (HEX code), image link, or text.
}