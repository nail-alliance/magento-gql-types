import { Float } from "./gql.float";
import { ID } from "./gql.ID";
import { Int } from "./gql.int";
export type GiftCardAmounts = {
    attribute_id?: Int;
    uid: ID;
    value?: Float;
    /** @deprecated */
    value_id?: Int;
    website_id?: Int;
    website_value?: Float;
};
