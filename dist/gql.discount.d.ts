import { Money } from "./gql.money";
import { CartDiscountType } from "./gql.cartDiscountType";
import { AppliedCoupon } from "./gql.appliedCoupon";
export type Discount = {
    "amount": Money;
    "applied_to": CartDiscountType;
    "coupon"?: AppliedCoupon | null | undefined;
    "is_discounting_locked"?: boolean | null | undefined;
    "label": string;
    "type"?: string | null | undefined;
    "value"?: number | null | undefined;
};
