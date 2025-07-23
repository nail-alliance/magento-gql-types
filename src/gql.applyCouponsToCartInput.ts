import {ApplyCouponsStrategy} from "./gql.applyCouponsStrategy";
import {String} from "./gql.string";
export type ApplyCouponsToCartInput = {
	cart_id: String // The unique ID of a Cart object.
	coupon_codes: [String] // An array of valid coupon codes.
	type?: ApplyCouponsStrategy // replace to replace the existing coupon(s) or append to add the coupon to the coupon(s) list.
}