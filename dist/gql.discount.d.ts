import { Float } from "./gql.float";
import { String } from "./gql.string";
import { Boolean } from "./gql.boolean";
import { AppliedCoupon } from "./gql.appliedCoupon";
import { CartDiscountType } from "./gql.cartDiscountType";
import { Money } from "./gql.money";
export type Discount = {
    amount: Money;
    applied_to: CartDiscountType;
    coupon?: AppliedCoupon;
    is_discounting_locked?: Boolean;
    label: String;
    type?: String;
    value?: Float;
};
