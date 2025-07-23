import { String } from "./gql.string";
import { Float } from "./gql.float";
import { Money } from "./gql.money";
export type TaxItem = {
    amount: Money;
    rate: Float;
    title: String;
};
