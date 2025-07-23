import {FixedProductTax} from "./gql.fixedProductTax";
import {Money} from "./gql.money";
import {ProductDiscount} from "./gql.productDiscount";
export type ProductPrice = {
	discount?: ProductDiscount // The price discount. Represents the difference between the regular and final price.
	final_price: Money // The final price of the product after applying discounts.
	fixed_product_taxes?: [FixedProductTax] // An array of the multiple Fixed Product Taxes that can be applied to a product price.
	regular_price: Money // The regular price of the product.
}