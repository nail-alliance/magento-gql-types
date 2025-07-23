import { AggregationOption } from "./gql.aggregationOption";
import { Int } from "./gql.int";
import { String } from "./gql.string";
export type Aggregation = {
    attribute_code: String;
    count?: Int;
    label?: String;
    options?: AggregationOption[];
    position?: Int;
};
