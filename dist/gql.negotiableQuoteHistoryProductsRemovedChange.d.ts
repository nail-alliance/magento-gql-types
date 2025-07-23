import { ProductInterface } from "./gql.productInterface";
import { ID } from "./gql.ID";
export type NegotiableQuoteHistoryProductsRemovedChange = {
    products_removed_from_catalog?: [ID];
    products_removed_from_quote?: [ProductInterface];
};
