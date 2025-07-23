import { String } from "./gql.string";
import { Money } from "./gql.money";
export type AppliedGiftCard = {
    applied_balance?: Money;
    code?: String;
    current_balance?: Money;
    expiration_date?: String;
};
