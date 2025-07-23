import {TaxItem} from "./gql.taxItem";
import {ShippingHandling} from "./gql.shippingHandling";
import {GiftOptionsPrices} from "./gql.giftOptionsPrices";
import {Discount} from "./gql.discount";
import {Money} from "./gql.money";
export type OrderTotal = {
	base_grand_total: Money // The final base grand total amount in the base currency.
	discounts?: Discount[] // The applied discounts to the order.
	gift_options?: GiftOptionsPrices // 
	grand_total: Money // The final total amount, including shipping, discounts, and taxes.
	shipping_handling?: ShippingHandling // Details about the shipping and handling costs for the order.
	/** @deprecated */
	subtotal: Money // The subtotal of the order, excluding shipping, discounts, and taxes. Use subtotal_excl_tax field instead Deprecated
	subtotal_excl_tax: Money // The subtotal of the order, excluding taxes.
	subtotal_incl_tax: Money // The subtotal of the order, including taxes.
	taxes?: TaxItem[] // The order tax details.
	total_giftcard?: Money // The gift card balance applied to the order.
	total_reward_points?: Money // The total reward points applied to the order.
	total_shipping: Money // The shipping amount for the order.
	total_store_credit?: Money // The total store credit applied to the order.
	total_tax: Money // The amount of tax applied to the order.
}