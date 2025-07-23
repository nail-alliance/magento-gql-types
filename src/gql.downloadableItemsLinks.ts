import {ID} from "./gql.ID";
import {String} from "./gql.string";
import {Int} from "./gql.int";
export type DownloadableItemsLinks = {
	sort_order?: Int // A number indicating the sort order.
	title?: String // The display name of the link.
	uid: ID // The unique ID for a DownloadableItemsLinks object.
}