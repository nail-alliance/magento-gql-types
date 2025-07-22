import {Discount} from "./gql.discount";
import {OrderItemOption} from "./gql.orderItemOption";
import {GiftMessage} from "./gql.giftMessage";
import {GiftWrapping} from "./gql.giftWrapping";
import {ID} from "./gql.ID";
import {OrderItemPrices} from "./gql.orderItemPrices";
import {ProductInterface} from "./gql.productInterface";
import {Money} from "./gql.money";

export interface OrderItemInterface {
    "discounts"?: Discount[] | null | undefined
    "eligible_for_return"?: boolean | null | undefined
    "entered_options"?: OrderItemOption[] | null | undefined
    "gift_message"?: GiftMessage | null | undefined
    "gift_wrapping"?: GiftWrapping | null | undefined
    "id": ID
    "prices"?: OrderItemPrices | null | undefined
    "product"?: ProductInterface | null | undefined
    "product_name"?: string | null | undefined
    "product_sale_price": Money
    "product_sku": string
    "product_type"?: string | null | undefined
    "product_url_key"?: string | null | undefined
    "quantity_canceled"?: number | null | undefined
    "quantity_invoiced"?: number | null | undefined
    "quantity_ordered"?: number | null | undefined
    "quantity_refunded"?: number | null | undefined
    "quantity_return_requested"?: number | null | undefined
    "quantity_returned"?: number | null | undefined
    "quantity_shipped"?: number | null | undefined
    "selected_options"?: OrderItemOption[] | null | undefined
    "status"?: string | null | undefined
}