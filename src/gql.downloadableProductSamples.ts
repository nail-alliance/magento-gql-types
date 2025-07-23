import {DownloadableFileTypeEnum} from "./gql.downloadableFileTypeEnum";
import {String} from "./gql.string";
import {Int} from "./gql.int";
export type DownloadableProductSamples = {
	/** @deprecated */
	id?: Int // This information should not be exposed on frontend. Deprecated
	/** @deprecated */
	sample_file?: String // sample_url serves to get the downloadable sample Deprecated
	/** @deprecated */
	sample_type?: DownloadableFileTypeEnum // sample_url serves to get the downloadable sample Deprecated
	sample_url?: String // The full URL to the downloadable sample.
	sort_order?: Int // A number indicating the sort order.
	title?: String // The display name of the sample.
}