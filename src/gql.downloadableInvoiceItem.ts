import {Float} from "./gql.float";
import {Money} from "./gql.money";
import {String} from "./gql.string";
import {OrderItemInterface} from "./gql.orderItemInterface";
import {ID} from "./gql.ID";
import {DownloadableItemsLinks} from "./gql.downloadableItemsLinks";
import {Discount} from "./gql.discount";
export type DownloadableInvoiceItem = {
	discounts?: [Discount] // Information about the final discount amount for the base product, including discounts on options.
	downloadable_links?: [DownloadableItemsLinks] // A list of downloadable links that are invoiced from the downloadable product.
	id: ID // The unique ID for an InvoiceItemInterface object.
	order_item?: OrderItemInterface // Details about an individual order item.
	product_name?: String // The name of the base product.
	product_sale_price: Money // The sale price for the base product including selected options.
	product_sku: String // The SKU of the base product.
	quantity_invoiced?: Float // The number of invoiced items.
}