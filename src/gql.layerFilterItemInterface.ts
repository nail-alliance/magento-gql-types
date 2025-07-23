import {String} from "./gql.string";
import {Int} from "./gql.int";
export interface LayerFilterItemInterface {
	/** @deprecated */
	items_count?: Int // The count of items per filter. Use AggregationOption.count instead. Deprecated
	/** @deprecated */
	label?: String // The label for a filter. Use AggregationOption.label instead. Deprecated
	/** @deprecated */
	value_string?: String // The value of a filter request variable to be used in query. Use AggregationOption.value instead. Deprecated
}