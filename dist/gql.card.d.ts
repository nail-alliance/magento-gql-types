import { String } from "./gql.string";
import { CardBin } from "./gql.cardBin";
export type Card = {
    bin_details?: CardBin;
    card_expiry_month?: String;
    card_expiry_year?: String;
    last_digits?: String;
    name?: String;
};
