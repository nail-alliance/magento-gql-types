import { ID } from "./gql.ID";
import { CartItemSelectedOptionValuePrice } from "./gql.cartItemSelectedOptionValuePrice";
export type SelectedCustomizableOptionValue = {
    "customizable_option_value_uid": ID;
    /** @deprecated */
    "id": number;
    "label": string;
    "price": CartItemSelectedOptionValuePrice;
    "value": string;
};
