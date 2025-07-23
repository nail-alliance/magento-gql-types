import { ID } from "./gql.ID";
import { ProductInterface } from "./gql.productInterface";
import { ProductAttribute } from "./gql.productAttribute";
export type ComparableItem = {
    attributes: ProductAttribute[];
    product: ProductInterface;
    uid: ID;
};
