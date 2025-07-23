import {Int} from "./gql.int";
import {String} from "./gql.string";
export interface ProductLinksInterface {
	link_type?: String // One of related, associated, upsell, or crosssell.
	linked_product_sku?: String // The SKU of the linked product.
	linked_product_type?: String // The type of linked product (simple, virtual, bundle, downloadable, grouped, configurable).
	position?: Int // The position within the list of product links.
	sku?: String // The identifier of the linked product.
}