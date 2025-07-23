import {String} from "./gql.string";
export type CustomerDownloadableProduct = {
	date?: String // The date and time the purchase was made.
	download_url?: String // The fully qualified URL to the download file.
	order_increment_id?: String // The unique ID assigned to the item.
	remaining_downloads?: String // The remaining number of times the customer can download the product.
	status?: String // Indicates when the product becomes available for download. Options are Pending and Invoiced.
}