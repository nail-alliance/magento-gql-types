import { Float } from "./gql.float";
import { String } from "./gql.string";
import { Money } from "./gql.money";
import { ID } from "./gql.ID";
export type ItemSelectedBundleOptionValue = {
    /** @deprecated */
    id: ID;
    price: Money;
    product_name: String;
    product_sku: String;
    quantity: Float;
    uid: ID;
};
