import {Float} from "./gql.float";
import {ShippingCartAddress} from "./gql.shippingCartAddress";
import {SelectedPaymentMethod} from "./gql.selectedPaymentMethod";
import {CartRule} from "./gql.cartRule";
import {CartPrices} from "./gql.cartPrices";
import {CartItems} from "./gql.cartItems";
import {CartItemInterface} from "./gql.cartItemInterface";
import {ID} from "./gql.ID";
import {Boolean} from "./gql.boolean";
import {GiftMessage} from "./gql.giftMessage";
import {String} from "./gql.string";
import {BillingCartAddress} from "./gql.billingCartAddress";
import {AvailablePaymentMethod} from "./gql.availablePaymentMethod";
import {GiftWrapping} from "./gql.giftWrapping";
import {AppliedStoreCredit} from "./gql.appliedStoreCredit";
import {RewardPointsAmount} from "./gql.rewardPointsAmount";
import {AppliedGiftCard} from "./gql.appliedGiftCard";
import {AppliedCoupon} from "./gql.appliedCoupon";
export type Cart = {
	/** @deprecated */
	applied_coupon?: AppliedCoupon // Use applied_coupons instead. Deprecated
	applied_coupons?: AppliedCoupon[] // An array of AppliedCoupon objects. Each object contains the code text attribute, which specifies the coupon code.
	applied_gift_cards?: AppliedGiftCard[] // An array of gift card items applied to the cart.
	applied_reward_points?: RewardPointsAmount // The amount of reward points applied to the cart.
	applied_store_credit?: AppliedStoreCredit // Store credit information applied to the cart.
	available_gift_wrappings: GiftWrapping[] // The list of available gift wrapping options for the cart.
	available_payment_methods?: AvailablePaymentMethod[] // An array of available payment methods.
	billing_address?: BillingCartAddress // The billing address assigned to the cart.
	email?: String // The email address of the guest or customer.
	gift_message?: GiftMessage // The entered gift message for the cart
	gift_receipt_included: Boolean // Indicates whether the shopper requested gift receipt for the cart.
	gift_wrapping?: GiftWrapping // The selected gift wrapping for the cart.
	id: ID // The unique ID for a Cart object.
	is_virtual: Boolean // Indicates whether the cart contains only virtual products.
	/** @deprecated */
	items?: CartItemInterface[] // An array of products that have been added to the cart. Use itemsV2 instead. Deprecated
	itemsV2?: CartItems // 
	prices?: CartPrices // Pricing details for the quote.
	printed_card_included: Boolean // Indicates whether the shopper requested a printed card for the cart.
	rules?: CartRule[] // Provides applied cart rules in the current active cart
	selected_payment_method?: SelectedPaymentMethod // Indicates which payment method was applied to the cart.
	shipping_addresses: ShippingCartAddress[] // An array of shipping addresses assigned to the cart.
	total_quantity: Float // The total number of items in the cart.
}