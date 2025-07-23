import { PayflowProUrlInput } from "./gql.payflowProUrlInput";
import { String } from "./gql.string";
export type PayflowProTokenInput = {
    cart_id: String;
    urls: PayflowProUrlInput;
};
