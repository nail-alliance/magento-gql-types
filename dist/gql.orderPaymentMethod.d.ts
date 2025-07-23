import { String } from "./gql.string";
import { KeyValue } from "./gql.keyValue";
export type OrderPaymentMethod = {
    additional_data?: KeyValue[];
    name: String;
    type: String;
};
