import {Website} from "./gql.website";
import {UrlRewrite} from "./gql.urlRewrite";
import {ID} from "./gql.ID";
import {UrlRewriteEntityTypeEnum} from "./gql.urlRewriteEntityTypeEnum";
import {ProductTierPrices} from "./gql.productTierPrices";
import {ProductStockStatus} from "./gql.productStockStatus";
import {CatalogRule} from "./gql.catalogRule";
import {ProductReviews} from "./gql.productReviews";
import {ProductLinksInterface} from "./gql.productLinksInterface";
import {TierPrice} from "./gql.tierPrice";
import {PriceRange} from "./gql.priceRange";
import {ProductPrices} from "./gql.productPrices";
import {CustomizableOptionInterface} from "./gql.customizableOptionInterface";
import {MediaGalleryEntry} from "./gql.mediaGalleryEntry";
import {MediaGalleryInterface} from "./gql.mediaGalleryInterface";
import {Float} from "./gql.float";
import {ProductImage} from "./gql.productImage";
import {Money} from "./gql.money";
import {Boolean} from "./gql.boolean";
import {DownloadableProductSamples} from "./gql.downloadableProductSamples";
import {DownloadableProductLinks} from "./gql.downloadableProductLinks";
import {ComplexTextValue} from "./gql.complexTextValue";
import {ProductCustomAttributes} from "./gql.productCustomAttributes";
import {ProductInterface} from "./gql.productInterface";
import {CategoryInterface} from "./gql.categoryInterface";
import {Int} from "./gql.int";
import {String} from "./gql.string";
export type DownloadableProduct = {
	/** @deprecated */
	activity?: String // Use the custom_attributes field instead. Deprecated
	/** @deprecated */
	attribute_set_id?: Int // The attribute set assigned to the product. The field should not be used on the storefront. Deprecated
	canonical_url?: String // The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled.
	categories?: [CategoryInterface] // The categories assigned to a product.
	/** @deprecated */
	category_gear?: String // Use the custom_attributes field instead. Deprecated
	/** @deprecated */
	climate?: String // Use the custom_attributes field instead. Deprecated
	/** @deprecated */
	collar?: String // Use the custom_attributes field instead. Deprecated
	/** @deprecated */
	color?: Int // Use the custom_attributes field instead. Deprecated
	country_of_manufacture?: String // The product's country of origin.
	/** @deprecated */
	created_at?: String // Timestamp indicating when the product was created. The field should not be used on the storefront. Deprecated
	crosssell_products?: [ProductInterface] // An array of cross-sell products.
	custom_attributesV2?: ProductCustomAttributes // Product custom attributes.
	description?: ComplexTextValue // Detailed information about the product. The value can include simple HTML tags.
	downloadable_product_links?: [DownloadableProductLinks] // An array containing information about the links for this downloadable product.
	downloadable_product_samples?: [DownloadableProductSamples] // An array containing information about samples of this downloadable product.
	/** @deprecated */
	eco_collection?: Int // Use the custom_attributes field instead. Deprecated
	/** @deprecated */
	erin_recommends?: Int // Use the custom_attributes field instead. Deprecated
	/** @deprecated */
	features_bags?: String // Use the custom_attributes field instead. Deprecated
	/** @deprecated */
	format?: Int // Use the custom_attributes field instead. Deprecated
	/** @deprecated */
	gender?: String // Use the custom_attributes field instead. Deprecated
	gift_message_available: Boolean // Returns a value indicating gift message availability for the product.
	gift_wrapping_available: Boolean // Returns a value indicating gift wrapping availability for the product.
	gift_wrapping_price?: Money // Returns value and currency indicating gift wrapping price for the product.
	/** @deprecated */
	id?: Int // The ID number assigned to the product. Use the uid field instead. Deprecated
	image?: ProductImage // The relative path to the main image on the product page.
	is_returnable?: String // Indicates whether the product can be returned.
	links_purchased_separately?: Int // A value of 1 indicates that each link in the array must be purchased separately.
	links_title?: String // The heading above the list of downloadable products.
	/** @deprecated */
	manufacturer?: Int // A number representing the product's manufacturer. Use the custom_attributes field instead. Deprecated
	/** @deprecated */
	material?: String // Use the custom_attributes field instead. Deprecated
	max_sale_qty?: Float // Maximum Qty Allowed in Shopping Cart
	media_gallery?: [MediaGalleryInterface] // An array of media gallery objects.
	/** @deprecated */
	media_gallery_entries?: [MediaGalleryEntry] // An array of MediaGalleryEntry objects. Use media_gallery instead. Deprecated
	meta_description?: String // A brief overview of the product for search results listings, maximum 255 characters.
	meta_keyword?: String // A comma-separated list of keywords that are visible only to search engines.
	meta_title?: String // A string that is displayed in the title bar and tab of the browser and in search results lists.
	min_sale_qty?: Float // Minimum Qty Allowed in Shopping Cart
	name?: String // The product name. Customers use this name to identify the product.
	/** @deprecated */
	new?: Int // Use the custom_attributes field instead. Deprecated
	new_from_date?: String // The beginning date for new product listings, and determines if the product is featured as a new product.
	new_to_date?: String // The end date for new product listings.
	only_x_left_in_stock?: Float // Product stock only x left count
	options?: [CustomizableOptionInterface] // An array of options for a customizable product.
	options_container?: String // If the product has multiple options, determines where they appear on the product page.
	/** @deprecated */
	pattern?: String // Use the custom_attributes field instead. Deprecated
	/** @deprecated */
	performance_fabric?: Int // Use the custom_attributes field instead. Deprecated
	/** @deprecated */
	price?: ProductPrices // Indicates the price of an item. Use price_range for product price information. Deprecated
	price_range: PriceRange // The range of prices for the product
	price_tiers?: [TierPrice] // An array of TierPrice objects.
	product_links?: [ProductLinksInterface] // An array of ProductLinks objects.
	/** @deprecated */
	purpose?: Int // Use the custom_attributes field instead. Deprecated
	quantity?: Float // Amount of available stock
	rating_summary: Float // The average of all the ratings given to the product.
	redirect_code: Int // Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect.
	related_products?: [ProductInterface] // An array of related products.
	relative_url?: String // The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original.
	review_count: Int // The total count of all the reviews given to the product.
	reviews: ProductReviews // The list of products reviews.
	rules?: [CatalogRule] // Provides applied catalog rules in the current active cart
	/** @deprecated */
	sale?: Int // Use the custom_attributes field instead. Deprecated
	short_description?: ComplexTextValue // A short description of the product. Its use depends on the theme.
	/** @deprecated */
	size?: Int // Use the custom_attributes field instead. Deprecated
	sku?: String // A number or code assigned to a product to identify the product, options, price, and manufacturer.
	/** @deprecated */
	sleeve?: String // Use the custom_attributes field instead. Deprecated
	small_image?: ProductImage // The relative path to the small image, which is used on catalog pages.
	/** @deprecated */
	special_from_date?: String // The beginning date that a product has a special price. The field should not be used on the storefront. Deprecated
	special_price?: Float // The discounted price of the product.
	special_to_date?: String // The end date for a product with a special price.
	staged: Boolean // Indicates whether the product is staged for a future campaign.
	stock_status?: ProductStockStatus // Stock status of the product
	/** @deprecated */
	strap_bags?: String // Use the custom_attributes field instead. Deprecated
	/** @deprecated */
	style_bags?: String // Use the custom_attributes field instead. Deprecated
	/** @deprecated */
	style_bottom?: String // Use the custom_attributes field instead. Deprecated
	/** @deprecated */
	style_general?: String // Use the custom_attributes field instead. Deprecated
	swatch_image?: String // The file name of a swatch image.
	thumbnail?: ProductImage // The relative path to the product's thumbnail image.
	/** @deprecated */
	tier_price?: Float // The price when tier pricing is in effect and the items purchased threshold has been reached. Use price_tiers for product tier price information. Deprecated
	/** @deprecated */
	tier_prices?: [ProductTierPrices] // An array of ProductTierPrices objects. Use price_tiers for product tier price information. Deprecated
	type?: UrlRewriteEntityTypeEnum // One of PRODUCT, CATEGORY, or CMS_PAGE.
	/** @deprecated */
	type_id?: String // One of simple, virtual, bundle, downloadable, grouped, or configurable. Use __typename instead. Deprecated
	uid: ID // The unique ID for a ProductInterface object.
	/** @deprecated */
	updated_at?: String // Timestamp indicating when the product was updated. The field should not be used on the storefront. Deprecated
	upsell_products?: [ProductInterface] // An array of up-sell products.
	url_key?: String // The part of the URL that identifies the product
	/** @deprecated */
	url_path?: String // Use product's canonical_url or url rewrites instead Deprecated
	url_rewrites?: [UrlRewrite] // URL rewrites list
	url_suffix?: String // The part of the product URL that is appended after the url key
	/** @deprecated */
	websites?: [Website] // An array of websites in which the product is available. The field should not be used on the storefront. Deprecated
}