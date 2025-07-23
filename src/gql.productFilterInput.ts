import {FilterTypeInput} from "./gql.filterTypeInput";
export type ProductFilterInput = {
	category_id?: FilterTypeInput // The category ID the product belongs to.
	country_of_manufacture?: FilterTypeInput // The product's country of origin.
	created_at?: FilterTypeInput // The timestamp indicating when the product was created.
	custom_layout?: FilterTypeInput // The name of a custom layout.
	custom_layout_update?: FilterTypeInput // XML code that is applied as a layout update to the product page.
	description?: FilterTypeInput // Detailed information about the product. The value can include simple HTML tags.
	gift_message_available?: FilterTypeInput // Indicates whether a gift message is available.
	has_options?: FilterTypeInput // Indicates whether additional attributes have been created for the product.
	image?: FilterTypeInput // The relative path to the main image on the product page.
	image_label?: FilterTypeInput // The label assigned to a product image.
	is_returnable?: FilterTypeInput // Indicates whether the product can be returned.
	manufacturer?: FilterTypeInput // A number representing the product's manufacturer.
	max_price?: FilterTypeInput // The numeric maximal price of the product. Do not include the currency code.
	meta_description?: FilterTypeInput // A brief overview of the product for search results listings, maximum 255 characters.
	meta_keyword?: FilterTypeInput // A comma-separated list of keywords that are visible only to search engines.
	meta_title?: FilterTypeInput // A string that is displayed in the title bar and tab of the browser and in search results lists.
	min_price?: FilterTypeInput // The numeric minimal price of the product. Do not include the currency code.
	name?: FilterTypeInput // The product name. Customers use this name to identify the product.
	news_from_date?: FilterTypeInput // The beginning date for new product listings, and determines if the product is featured as a new product.
	news_to_date?: FilterTypeInput // The end date for new product listings.
	options_container?: FilterTypeInput // If the product has multiple options, determines where they appear on the product page.
	or?: ProductFilterInput // The keyword required to perform a logical OR comparison.
	price?: FilterTypeInput // The price of an item.
	required_options?: FilterTypeInput // Indicates whether the product has required options.
	short_description?: FilterTypeInput // A short description of the product. Its use depends on the theme.
	sku?: FilterTypeInput // A number or code assigned to a product to identify the product, options, price, and manufacturer.
	small_image?: FilterTypeInput // The relative path to the small image, which is used on catalog pages.
	small_image_label?: FilterTypeInput // The label assigned to a product's small image.
	special_from_date?: FilterTypeInput // The beginning date that a product has a special price.
	special_price?: FilterTypeInput // The discounted price of the product. Do not include the currency code.
	special_to_date?: FilterTypeInput // The end date that a product has a special price.
	swatch_image?: FilterTypeInput // The file name of a swatch image.
	thumbnail?: FilterTypeInput // The relative path to the product's thumbnail image.
	thumbnail_label?: FilterTypeInput // The label assigned to a product's thumbnail image.
	tier_price?: FilterTypeInput // The price when tier pricing is in effect and the items purchased threshold has been reached.
	updated_at?: FilterTypeInput // The timestamp indicating when the product was updated.
	url_key?: FilterTypeInput // The part of the URL that identifies the product
	url_path?: FilterTypeInput // 
	weight?: FilterTypeInput // The weight of the item, in units defined by the store.
}