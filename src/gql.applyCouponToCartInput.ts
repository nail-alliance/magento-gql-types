import {String} from "./gql.string";
export type ApplyCouponToCartInput = {
	cart_id: String // The unique ID of a Cart object.
	coupon_code: String // A valid coupon code.
}