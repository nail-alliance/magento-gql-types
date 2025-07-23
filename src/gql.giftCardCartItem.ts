import {ID} from "./gql.ID";
import {ProductInterface} from "./gql.productInterface";
import {CartItemPrices} from "./gql.cartItemPrices";
import {ItemNote} from "./gql.itemNote";
import {Float} from "./gql.float";
import {Boolean} from "./gql.boolean";
import {String} from "./gql.string";
import {GiftMessage} from "./gql.giftMessage";
import {CartItemError} from "./gql.cartItemError";
import {Discount} from "./gql.discount";
import {SelectedCustomizableOption} from "./gql.selectedCustomizableOption";
import {GiftWrapping} from "./gql.giftWrapping";
import {Money} from "./gql.money";
export type GiftCardCartItem = {
	amount: Money // The amount and currency of the gift card.
	available_gift_wrapping: [GiftWrapping] // The list of available gift wrapping options for the cart item.
	customizable_options: [SelectedCustomizableOption] // An array of customizations applied to the gift card.
	discount?: [Discount] // Contains discount for quote line item.
	errors?: [CartItemError] // An array of errors encountered while loading the cart item
	gift_message?: GiftMessage // The entered gift message data for the gift card cart item
	gift_wrapping?: GiftWrapping // The selected gift wrapping option for the cart item.
	/** @deprecated */
	id: String // Use uid instead. Deprecated
	is_available: Boolean // True if requested quantity is less than available stock, false otherwise.
	max_qty?: Float // Line item max qty in quote template
	message?: String // The message from the sender to the recipient.
	min_qty?: Float // Line item min qty in quote template
	not_available_message?: String // Message to display when the product is not available with this selected option.
	note_from_buyer?: [ItemNote] // The buyer's quote line item note.
	note_from_seller?: [ItemNote] // The seller's quote line item note.
	prices?: CartItemPrices // Contains details about the price of the item, including taxes and discounts.
	product: ProductInterface // Details about an item in the cart.
	quantity: Float // The quantity of this item in the cart.
	recipient_email?: String // The email address of the person receiving the gift card.
	recipient_name: String // The name of the person receiving the gift card.
	sender_email?: String // The email address of the sender.
	sender_name: String // The name of the sender.
	uid: ID // The unique ID for a CartItemInterface object.
}