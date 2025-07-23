import {ProductMediaGalleryEntriesVideoContent} from "./gql.productMediaGalleryEntriesVideoContent";
import {ID} from "./gql.ID";
import {Int} from "./gql.int";
import {String} from "./gql.string";
import {Boolean} from "./gql.boolean";
import {ProductMediaGalleryEntriesContent} from "./gql.productMediaGalleryEntriesContent";
export type MediaGalleryEntry = {
	content?: ProductMediaGalleryEntriesContent // Details about the content of the media gallery item.
	disabled?: Boolean // Indicates whether the image is hidden from view.
	file?: String // The path of the image on the server.
	/** @deprecated */
	id?: Int // The identifier assigned to the object. Use uid instead. Deprecated
	label?: String // The alt text displayed on the storefront when the user points to the image.
	media_type?: String // Either image or video.
	position?: Int // The media item's position after it has been sorted.
	types?: String[] // Array of image types. It can have the following values: image, small_image, thumbnail.
	uid: ID // The unique ID for a MediaGalleryEntry object.
	video_content?: ProductMediaGalleryEntriesVideoContent // Details about the content of a video item.
}