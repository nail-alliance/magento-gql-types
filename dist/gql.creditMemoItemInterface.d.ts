import { Float } from "./gql.float";
import { Money } from "./gql.money";
import { String } from "./gql.string";
import { OrderItemInterface } from "./gql.orderItemInterface";
import { ID } from "./gql.ID";
import { Discount } from "./gql.discount";
export interface CreditMemoItemInterface {
    discounts?: Discount[];
    id: ID;
    order_item?: OrderItemInterface;
    product_name?: String;
    product_sale_price: Money;
    product_sku: String;
    quantity_refunded?: Float;
}
