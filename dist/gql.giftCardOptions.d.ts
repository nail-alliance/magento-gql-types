import { String } from "./gql.string";
import { Money } from "./gql.money";
export type GiftCardOptions = {
    amount?: Money;
    custom_giftcard_amount?: Money;
    message?: String;
    recipient_email?: String;
    recipient_name?: String;
    sender_email?: String;
    sender_name?: String;
};
