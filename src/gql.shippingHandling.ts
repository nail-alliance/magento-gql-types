import {TaxItem} from "./gql.taxItem";
import {ShippingDiscount} from "./gql.shippingDiscount";
import {Money} from "./gql.money";
export type ShippingHandling = {
	amount_excluding_tax?: Money // The shipping amount, excluding tax.
	amount_including_tax?: Money // The shipping amount, including tax.
	discounts?: [ShippingDiscount] // The applied discounts to the shipping.
	taxes?: [TaxItem] // Details about taxes applied for shipping.
	total_amount: Money // The total amount for shipping.
}