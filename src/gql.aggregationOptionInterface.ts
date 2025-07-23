import {String} from "./gql.string";
import {Int} from "./gql.int";
export interface AggregationOptionInterface {
	count?: Int // The number of items that match the aggregation option.
	label?: String // The display label for an aggregation option.
	value: String // The internal ID that represents the value of the option.
}