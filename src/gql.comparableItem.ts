import {ProductInterface} from "./gql.productInterface";
import {ID} from "./gql.ID";
import {ProductAttribute} from "./gql.productAttribute";

export type ComparableItem = {
    "attributes": ProductAttribute[]
    "product": ProductInterface
    "uid": ID
}
