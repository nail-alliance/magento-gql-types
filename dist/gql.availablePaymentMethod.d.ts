import { Boolean } from "./gql.boolean";
import { String } from "./gql.string";
export type AvailablePaymentMethod = {
    code: String;
    is_deferred: Boolean;
    title: String;
};
