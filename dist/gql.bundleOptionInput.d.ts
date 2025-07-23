import { String } from "./gql.string";
import { Float } from "./gql.float";
import { Int } from "./gql.int";
export type BundleOptionInput = {
    id: Int;
    quantity: Float;
    value: String[];
};
