import {Money} from "./gql.money";
import {FixedProductTax} from "./gql.fixedProductTax";
import {Discount} from "./gql.discount";
export type OrderItemPrices = {
	discounts?: [Discount] // An array of discounts to be applied to the cart item.
	fixed_product_taxes: [FixedProductTax] // 
	original_price?: Money // The original price of the item.
	original_price_including_tax?: Money // The original price of the item including tax.
	original_row_total: Money // The value of the original price multiplied by the quantity of the item.
	original_row_total_including_tax: Money // The value of the original price multiplied by the quantity of the item including tax.
	price: Money // The price of the item before any discounts were applied. The price that might include tax, depending on the configured display settings for cart.
	price_including_tax: Money // The price of the item before any discounts were applied. The price that might include tax, depending on the configured display settings for cart.
	row_total: Money // The value of the price multiplied by the quantity of the item.
	row_total_including_tax: Money // The value of row_total plus the tax applied to the item.
	total_item_discount: Money // The total of all discounts applied to the item.
}