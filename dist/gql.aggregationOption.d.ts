import { String } from "./gql.string";
import { Int } from "./gql.int";
export type AggregationOption = {
    count?: Int;
    label?: String;
    value: String;
};
