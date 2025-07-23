import {UrlRewriteEntityTypeEnum} from "./gql.urlRewriteEntityTypeEnum";
import {Int} from "./gql.int";
import {ID} from "./gql.ID";
import {String} from "./gql.string";
export type EntityUrl = {
	/** @deprecated */
	canonical_url?: String // Use relative_url instead. Deprecated
	entity_uid?: ID // The unique ID for a ProductInterface, CategoryInterface, CmsPage, or similar object associated with the specified URL. This could be a product, category, or CMS page UID.
	/** @deprecated */
	id?: Int // The ID assigned to the object associated with the specified url. This could be a product ID, category ID, or page ID. Use entity_uid instead. Deprecated
	redirectCode?: Int // Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect.
	relative_url?: String // The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original.
	type?: UrlRewriteEntityTypeEnum // One of PRODUCT, CATEGORY, or CMS_PAGE.
}