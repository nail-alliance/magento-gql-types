import {CartItems} from "./gql.cartItems"
import {ID} from "./gql.ID"
import {AppliedCoupon} from "./gql.appliedCoupon"
import {ShippingCartAddress} from "./gql.shippingCartAddress"
import {SelectedPaymentMethod} from "./gql.selectedPaymentMethod"
import {CartRule} from "./gql.cartRule"
import {CartPrices} from "./gql.cartPrices"
import {AppliedGiftCard} from "./gql.appliedGiftCard"
import {RewardPointsAmount} from "./gql.rewardPointsAmount"
import {AppliedStoreCredit} from "./gql.appliedStoreCredit"
import {GiftWrapping} from "./gql.giftWrapping"
import {AvailablePaymentMethod} from "./gql.availablePaymentMethod"
import {GiftMessage} from "./gql.giftMessage"
import {BillingCartAddress} from "./gql.billingCartAddress"

export type Cart = {
    "applied_coupons"?: AppliedCoupon[] | null
    "applied_gift_cards"?: AppliedGiftCard[] | null
    "applied_reward_points"?: RewardPointsAmount | null
    "applied_store_credit"?: AppliedStoreCredit | null
    "available_gift_wrappings": GiftWrapping[]
    "available_payment_methods"?: AvailablePaymentMethod[] | null
    "billing_address"?: BillingCartAddress | null
    "email"?: string | null
    "gift_message"?: GiftMessage | null
    "gift_receipt_included": boolean
    "gift_wrapping"?: GiftWrapping | null
    "id": ID
    "is_virtual": boolean
    "itemsV2"?: CartItems | null
    "prices"?: CartPrices | null
    "printed_card_included": boolean
    "rules"?: CartRule[] | null
    "selected_payment_method"?: SelectedPaymentMethod | null
    "shipping_addresses": ShippingCartAddress[]
    "total_quantity": number
}

