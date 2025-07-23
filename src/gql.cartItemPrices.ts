import {Money} from "./gql.money";
import {FixedProductTax} from "./gql.fixedProductTax";
import {Discount} from "./gql.discount";
import {ProductDiscount} from "./gql.productDiscount";
export type CartItemPrices = {
	catalog_discount?: ProductDiscount // The price discount for the unit price of the item represents the difference between its regular price and final price.
	discounts?: [Discount] // An array of discounts to be applied to the cart item.
	fixed_product_taxes?: [FixedProductTax] // An array of FPTs applied to the cart item.
	original_item_price: Money // The value of the original unit price for the item, including discounts.
	original_row_total: Money // The value of the original price multiplied by the quantity of the item.
	price: Money // The price of the item before any discounts were applied. The price that might include tax, depending on the configured display settings for cart.
	price_including_tax: Money // The price of the item before any discounts were applied. The price that might include tax, depending on the configured display settings for cart.
	row_catalog_discount?: ProductDiscount // The price discount multiplied by the item quantity represents the total difference between the regular price and the final price for the entire quote item.
	row_total: Money // The value of the price multiplied by the quantity of the item.
	row_total_including_tax: Money // The value of row_total plus the tax applied to the item.
	total_item_discount?: Money // The total of all discounts applied to the item.
}