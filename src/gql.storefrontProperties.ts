import {Boolean} from "./gql.boolean";
import {UseInLayeredNavigationOptions} from "./gql.useInLayeredNavigationOptions";
import {Int} from "./gql.int";
export type StorefrontProperties = {
	position?: Int // The relative position of the attribute in the layered navigation block.
	use_in_layered_navigation?: UseInLayeredNavigationOptions // Indicates whether the attribute is filterable with results, without results, or not at all.
	use_in_product_listing?: Boolean // Indicates whether the attribute is displayed in product listings.
	use_in_search_results_layered_navigation?: Boolean // Indicates whether the attribute can be used in layered navigation on search results pages.
	visible_on_catalog_pages?: Boolean // Indicates whether the attribute is displayed on product pages.
}