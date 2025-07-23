import {ID} from "./gql.ID";
import {UrlRewriteEntityTypeEnum} from "./gql.urlRewriteEntityTypeEnum";
import {Boolean} from "./gql.boolean";
import {CategoryProducts} from "./gql.categoryProducts";
import {Int} from "./gql.int";
import {Float} from "./gql.float";
import {CmsBlock} from "./gql.cmsBlock";
import {Breadcrumb} from "./gql.breadcrumb";
import {String} from "./gql.string";
export type CategoryTree = {
	automatic_sorting?: String // 
	available_sort_by?: String[] // 
	breadcrumbs?: Breadcrumb[] // An array of breadcrumb items.
	canonical_url?: String // The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Categories' is enabled.
	children?: CategoryTree[] // A tree of child categories.
	children_count?: String // 
	cms_block?: CmsBlock // Contains a category CMS block.
	/** @deprecated */
	created_at?: String // The timestamp indicating when the category was created. The field should not be used on the storefront. Deprecated
	custom_layout_update_file?: String // 
	default_sort_by?: String // The attribute to use for sorting.
	description?: String // An optional description of the category.
	display_mode?: String // 
	filter_price_range?: Float // 
	/** @deprecated */
	id?: Int // An ID that uniquely identifies the category. Use uid instead. Deprecated
	image?: String // 
	include_in_menu?: Int // 
	is_anchor?: Int // 
	landing_page?: Int // 
	level?: Int // The depth of the category within the tree.
	meta_description?: String // 
	meta_keywords?: String // 
	meta_title?: String // 
	name?: String // The display name of the category.
	path?: String // The full category path.
	path_in_store?: String // The category path within the store.
	position?: Int // The position of the category relative to other categories at the same level in tree.
	product_count?: Int // The number of products in the category that are marked as visible. By default, in complex products, parent products are visible, but their child products are not.
	products?: CategoryProducts // The list of products assigned to the category.
	redirect_code: Int // Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect.
	relative_url?: String // The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original.
	staged: Boolean // Indicates whether the category is staged for a future campaign.
	type?: UrlRewriteEntityTypeEnum // One of PRODUCT, CATEGORY, or CMS_PAGE.
	uid: ID // The unique ID for a CategoryInterface object.
	/** @deprecated */
	updated_at?: String // The timestamp indicating when the category was updated. The field should not be used on the storefront. Deprecated
	url_key?: String // The URL key assigned to the category.
	url_path?: String // The URL path assigned to the category.
	url_suffix?: String // The part of the category URL that is appended after the url key
}