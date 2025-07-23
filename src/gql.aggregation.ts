import {AggregationOption} from "./gql.aggregationOption";
import {Int} from "./gql.int";
import {String} from "./gql.string";
export type Aggregation = {
	attribute_code: String // Attribute code of the aggregation group.
	count?: Int // The number of options in the aggregation group.
	label?: String // The aggregation display name.
	options?: AggregationOption[] // Array of options for the aggregation.
	position?: Int // The relative position of the attribute in a layered navigation block.
}