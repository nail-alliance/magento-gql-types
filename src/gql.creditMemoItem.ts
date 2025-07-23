import {Float} from "./gql.float";
import {Money} from "./gql.money";
import {String} from "./gql.string";
import {OrderItemInterface} from "./gql.orderItemInterface";
import {ID} from "./gql.ID";
import {Discount} from "./gql.discount";
export type CreditMemoItem = {
	discounts?: Discount[] // Details about the final discount amount for the base product, including discounts on options.
	id: ID // The unique ID for a CreditMemoItemInterface object.
	order_item?: OrderItemInterface // The order item the credit memo is applied to.
	product_name?: String // The name of the base product.
	product_sale_price: Money // The sale price for the base product, including selected options.
	product_sku: String // The SKU of the base product.
	quantity_refunded?: Float // The number of refunded items.
}