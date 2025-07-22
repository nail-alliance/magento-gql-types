import {Discount} from "./gql.discount";
import {ID} from "./gql.ID";
import {Money} from "./gql.money";

import {OrderItemInterface} from "./gql.orderItemInterface";

export interface InvoiceItemInterface {
    "discounts"?: Discount[] | null | undefined
    "id": ID
    "order_item"?: OrderItemInterface | null | undefined
    "product_name"?: string | null | undefined
    "product_sale_price": Money
    "product_sku": string
    "quantity_invoiced"?: number | null | undefined
}