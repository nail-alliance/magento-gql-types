import {String} from "./gql.string";
export type RemoveCouponsFromCartInput = {
	cart_id: String // The unique ID of a Cart object.
	coupon_codes: [String] // An array of coupon codes to be removed from the quote. If coupon_codes is empty all coupons will be removed from the quote.
}