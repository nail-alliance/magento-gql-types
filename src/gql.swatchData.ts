import {String} from "./gql.string";
export type SwatchData = {
	type?: String // The type of swatch filter item: 1 - text; 2 - image.
	value?: String // The value for the swatch item. It could be text or an image link.
}