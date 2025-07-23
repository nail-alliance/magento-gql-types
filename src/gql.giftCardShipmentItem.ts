import {Float} from "./gql.float";
import {Money} from "./gql.money";
import {String} from "./gql.string";
import {OrderItemInterface} from "./gql.orderItemInterface";
import {ID} from "./gql.ID";
import {GiftCardItem} from "./gql.giftCardItem";
export type GiftCardShipmentItem = {
	gift_card?: GiftCardItem // Selected gift card properties for a shipment item.
	id: ID // The unique ID for a ShipmentItemInterface object.
	order_item?: OrderItemInterface // The order item associated with the shipment item.
	product_name?: String // The name of the base product.
	product_sale_price: Money // The sale price for the base product.
	product_sku: String // The SKU of the base product.
	quantity_shipped: Float // The number of shipped items.
}