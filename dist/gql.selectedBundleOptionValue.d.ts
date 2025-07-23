import { ID } from "./gql.ID";
import { Float } from "./gql.float";
import { Money } from "./gql.money";
import { String } from "./gql.string";
import { Int } from "./gql.int";
export type SelectedBundleOptionValue = {
    id: Int;
    label: String;
    original_price: Money;
    /** @deprecated */
    price: Float;
    priceV2: Money;
    quantity: Float;
    uid: ID;
};
