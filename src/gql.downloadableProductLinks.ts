import {ID} from "./gql.ID";
import {String} from "./gql.string";
import {Float} from "./gql.float";
import {DownloadableFileTypeEnum} from "./gql.downloadableFileTypeEnum";
import {Boolean} from "./gql.boolean";
import {Int} from "./gql.int";
export type DownloadableProductLinks = {
	/** @deprecated */
	id?: Int // This information should not be exposed on frontend. Deprecated
	/** @deprecated */
	is_shareable?: Boolean // This information should not be exposed on frontend. Deprecated
	/** @deprecated */
	link_type?: DownloadableFileTypeEnum // sample_url serves to get the downloadable sample Deprecated
	/** @deprecated */
	number_of_downloads?: Int // This information should not be exposed on frontend. Deprecated
	price?: Float // The price of the downloadable product.
	/** @deprecated */
	sample_file?: String // sample_url serves to get the downloadable sample Deprecated
	/** @deprecated */
	sample_type?: DownloadableFileTypeEnum // sample_url serves to get the downloadable sample Deprecated
	sample_url?: String // The full URL to the downloadable sample.
	sort_order?: Int // A number indicating the sort order.
	title?: String // The display name of the link.
	uid: ID // The unique ID for a DownloadableProductLinks object.
}