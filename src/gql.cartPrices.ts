import {Money} from "./gql.money";
import {GiftOptionsPrices} from "./gql.giftOptionsPrices";
import {Discount} from "./gql.discount";
import {CartDiscount} from "./gql.cartDiscount";
import {CartTaxItem} from "./gql.cartTaxItem";
export type CartPrices = {
	applied_taxes?: CartTaxItem[] // An array containing the names and amounts of taxes applied to each item in the cart.
	/** @deprecated */
	discount?: CartDiscount // Use discounts instead. Deprecated
	discounts?: Discount[] // An array containing cart rule discounts, store credit and gift cards applied to the cart.
	gift_options?: GiftOptionsPrices // The list of prices for the selected gift options.
	grand_total?: Money // The total, including discounts, taxes, shipping, and other fees.
	grand_total_excluding_tax?: Money // The total of the cart, including discounts, shipping, and other fees without tax.
	subtotal_excluding_tax?: Money // The subtotal without any applied taxes.
	subtotal_including_tax?: Money // The subtotal including any applied taxes.
	subtotal_with_discount_excluding_tax?: Money // The subtotal with any discounts applied, but not taxes.
}