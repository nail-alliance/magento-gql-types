import { String } from "./gql.string";
import { Int } from "./gql.int";
export interface AggregationOptionInterface {
    count?: Int;
    label?: String;
    value: String;
}
