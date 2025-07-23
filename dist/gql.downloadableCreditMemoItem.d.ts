import { Float } from "./gql.float";
import { Money } from "./gql.money";
import { String } from "./gql.string";
import { OrderItemInterface } from "./gql.orderItemInterface";
import { ID } from "./gql.ID";
import { DownloadableItemsLinks } from "./gql.downloadableItemsLinks";
import { Discount } from "./gql.discount";
export type DownloadableCreditMemoItem = {
    discounts?: [Discount];
    downloadable_links?: [DownloadableItemsLinks];
    id: ID;
    order_item?: OrderItemInterface;
    product_name?: String;
    product_sale_price: Money;
    product_sku: String;
    quantity_refunded?: Float;
};
