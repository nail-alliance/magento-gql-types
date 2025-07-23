import {ID} from "./gql.ID";
import {String} from "./gql.string";
import {Int} from "./gql.int";
export type Breadcrumb = {
	/** @deprecated */
	category_id?: Int // Deprecated The ID of the category. Use category_uid instead.
	category_level?: Int // The category level.
	category_name?: String // The display name of the category.
	category_uid: ID // The unique ID for a Breadcrumb object.
	category_url_key?: String // The URL key of the category.
	category_url_path?: String // The URL path of the category.
}