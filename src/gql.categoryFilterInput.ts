import {FilterMatchTypeInput} from "./gql.filterMatchTypeInput";
import {FilterEqualTypeInput} from "./gql.filterEqualTypeInput";
export type CategoryFilterInput = {
	category_uid?: FilterEqualTypeInput // Filter by the unique category ID for a CategoryInterface object.
	/** @deprecated */
	ids?: FilterEqualTypeInput // Deprecated: use 'category_uid' to filter uniquely identifiers of categories.
	name?: FilterMatchTypeInput // Filter by the display name of the category.
	parent_category_uid?: FilterEqualTypeInput // Filter by the unique parent category ID for a CategoryInterface object.
	parent_id?: FilterEqualTypeInput // Filter by the unique parent category ID for a CategoryInterface object.
	url_key?: FilterEqualTypeInput // Filter by the part of the URL that identifies the category.
	url_path?: FilterEqualTypeInput // Filter by the URL path for the category.
}