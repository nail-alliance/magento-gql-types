import { String } from "./gql.string";
import { Money } from "./gql.money";
export type GiftCardAccount = {
    balance?: Money;
    code?: String;
    expiration_date?: String;
};
