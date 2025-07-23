import {Float} from "./gql.float";
import {Money} from "./gql.money";
import {String} from "./gql.string";
import {ProductInterface} from "./gql.productInterface";
import {OrderItemPrices} from "./gql.orderItemPrices";
import {ID} from "./gql.ID";
import {GiftWrapping} from "./gql.giftWrapping";
import {GiftMessage} from "./gql.giftMessage";
import {GiftCardItem} from "./gql.giftCardItem";
import {OrderItemOption} from "./gql.orderItemOption";
import {Boolean} from "./gql.boolean";
import {Discount} from "./gql.discount";
export type GiftCardOrderItem = {
	discounts?: Discount[] // The final discount information for the product.
	eligible_for_return?: Boolean // Indicates whether the order item is eligible to be in a return request.
	entered_options?: OrderItemOption[] // The entered option for the base product, such as a logo or image.
	gift_card?: GiftCardItem // Selected gift card properties for an order item.
	gift_message?: GiftMessage // The selected gift message for the order item
	gift_wrapping?: GiftWrapping // The selected gift wrapping for the order item.
	id: ID // The unique ID for an OrderItemInterface object.
	prices?: OrderItemPrices // Contains details about the price of the item, including taxes and discounts.
	product?: ProductInterface // The ProductInterface object, which contains details about the base product
	product_name?: String // The name of the base product.
	product_sale_price: Money // The sale price of the base product, including selected options.
	product_sku: String // The SKU of the base product.
	product_type?: String // The type of product, such as simple, configurable, etc.
	product_url_key?: String // URL key of the base product.
	quantity_canceled?: Float // The number of canceled items.
	quantity_invoiced?: Float // The number of invoiced items.
	quantity_ordered?: Float // The number of units ordered for this item.
	quantity_refunded?: Float // The number of refunded items.
	quantity_return_requested?: Float // The requested return quantity of the item.
	quantity_returned?: Float // The number of returned items.
	quantity_shipped?: Float // The number of shipped items.
	selected_options?: OrderItemOption[] // The selected options for the base product, such as color or size.
	status?: String // The status of the order item.
}