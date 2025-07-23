import { CartItemSelectedOptionValuePrice } from "./gql.cartItemSelectedOptionValuePrice";
import { String } from "./gql.string";
import { Int } from "./gql.int";
import { ID } from "./gql.ID";
export type SelectedCustomizableOptionValue = {
    customizable_option_value_uid: ID;
    /** @deprecated */
    id: Int;
    label: String;
    price: CartItemSelectedOptionValuePrice;
    value: String;
};
