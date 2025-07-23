import {Float} from "./gql.float";
import {String} from "./gql.string";
import {Boolean} from "./gql.boolean";
import {AppliedCoupon} from "./gql.appliedCoupon";
import {CartDiscountType} from "./gql.cartDiscountType";
import {Money} from "./gql.money";
export type Discount = {
	amount: Money // The amount of the discount.
	applied_to: CartDiscountType // The type of the entity the discount is applied to.
	coupon?: AppliedCoupon // The coupon related to the discount.
	is_discounting_locked?: Boolean // Is quote discounting locked for line item.
	label: String // A description of the discount.
	type?: String // Quote line item discount type. Values: 1 = PERCENTAGE_DISCOUNT; 2 = AMOUNT_DISCOUNT; 3 = PROPOSED_TOTAL.
	value?: Float // Quote line item discount value.
}