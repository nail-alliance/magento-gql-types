import { Int } from "./gql.int";
import { String } from "./gql.string";
export interface ProductLinksInterface {
    link_type?: String;
    linked_product_sku?: String;
    linked_product_type?: String;
    position?: Int;
    sku?: String;
}
