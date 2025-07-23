import {UrlRewriteEntityTypeEnum} from "./gql.urlRewriteEntityTypeEnum";
import {Int} from "./gql.int";
import {String} from "./gql.string";
export type CmsPage = {
	content?: String // The content of the CMS page in raw HTML.
	content_heading?: String // The heading that displays at the top of the CMS page.
	identifier?: String // The ID of a CMS page.
	meta_description?: String // A brief description of the page for search results listings.
	meta_keywords?: String // A brief description of the page for search results listings.
	meta_title?: String // A page title that is indexed by search engines and appears in search results listings.
	page_layout?: String // The design layout of the page, indicating the number of columns and navigation features used on the page.
	redirect_code: Int // Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect.
	relative_url?: String // The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original.
	title?: String // The name that appears in the breadcrumb trail navigation and in the browser title bar and tab.
	type?: UrlRewriteEntityTypeEnum // One of PRODUCT, CATEGORY, or CMS_PAGE.
	url_key?: String // The URL key of the CMS page, which is often based on the content_heading.
}