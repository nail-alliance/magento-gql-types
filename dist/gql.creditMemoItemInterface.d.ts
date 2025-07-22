import { Discount } from "./gql.discount";
import { ID } from "./gql.ID";
import { OrderItemInterface } from "./gql.orderItemInterface";
import { Money } from "./gql.money";
export interface CreditMemoItemInterface {
    "discounts"?: Discount[] | null | undefined;
    "id": ID;
    "order_item"?: OrderItemInterface | null | undefined;
    "product_name"?: string | null | undefined;
    "product_sale_price": Money;
    "product_sku": string;
    "quantity_refunded"?: number | null | undefined;
}
