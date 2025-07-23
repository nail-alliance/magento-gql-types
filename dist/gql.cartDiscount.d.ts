import { String } from "./gql.string";
import { Money } from "./gql.money";
export type CartDiscount = {
    amount: Money;
    label: String[];
};
