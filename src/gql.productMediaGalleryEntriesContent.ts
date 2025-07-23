import {String} from "./gql.string";
export type ProductMediaGalleryEntriesContent = {
	base64_encoded_data?: String // The image in base64 format.
	name?: String // The file name of the image.
	type?: String // The MIME type of the file, such as image/png.
}