import {SwatchData} from "./gql.swatchData";
import {String} from "./gql.string";
import {Int} from "./gql.int";
export type SwatchLayerFilterItem = {
	/** @deprecated */
	items_count?: Int // The count of items per filter. Use AggregationOption.count instead. Deprecated
	/** @deprecated */
	label?: String // The label for a filter. Use AggregationOption.label instead. Deprecated
	swatch_data?: SwatchData // Data required to render a swatch filter item.
	/** @deprecated */
	value_string?: String // The value of a filter request variable to be used in query. Use AggregationOption.value instead. Deprecated
}