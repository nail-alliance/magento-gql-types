import { ApplyCouponsStrategy } from "./gql.applyCouponsStrategy";
import { String } from "./gql.string";
export type ApplyCouponsToCartInput = {
    cart_id: String;
    coupon_codes: String[];
    type?: ApplyCouponsStrategy;
};
