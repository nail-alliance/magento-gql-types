import {String} from "./gql.string";
export type ProductMediaGalleryEntriesVideoContent = {
	media_type?: String // Must be external-video.
	video_description?: String // A description of the video.
	video_metadata?: String // Optional data about the video.
	video_provider?: String // Describes the video source.
	video_title?: String // The title of the video.
	video_url?: String // The URL to the video.
}