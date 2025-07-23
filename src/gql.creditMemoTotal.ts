import {TaxItem} from "./gql.taxItem";
import {ShippingHandling} from "./gql.shippingHandling";
import {Discount} from "./gql.discount";
import {Money} from "./gql.money";
export type CreditMemoTotal = {
	adjustment: Money // An adjustment manually applied to the order.
	base_grand_total: Money // The final base grand total amount in the base currency.
	discounts?: [Discount] // The applied discounts to the credit memo.
	grand_total: Money // The final total amount, including shipping, discounts, and taxes.
	shipping_handling?: ShippingHandling // Details about the shipping and handling costs for the credit memo.
	subtotal: Money // The subtotal of the invoice, excluding shipping, discounts, and taxes.
	taxes?: [TaxItem] // The credit memo tax details.
	total_shipping: Money // The shipping amount for the credit memo.
	total_tax: Money // The amount of tax applied to the credit memo.
}