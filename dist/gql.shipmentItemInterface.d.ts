import { ID } from "./gql.ID";
import { Money } from "./gql.money";
import { OrderItemInterface } from "./gql.orderItemInterface";
export interface ShipmentItemInterface {
    "id": ID;
    "order_item"?: OrderItemInterface | null | undefined;
    "product_name"?: string | null | undefined;
    "product_sale_price": Money;
    "product_sku": string;
    "quantity_shipped": number;
}
