import {String} from "./gql.string";
import {Int} from "./gql.int";
import {LayerFilterItemInterface} from "./gql.layerFilterItemInterface";
export type LayerFilter = {
	/** @deprecated */
	filter_items?: LayerFilterItemInterface[] // An array of filter items. Use Aggregation.options instead. Deprecated
	/** @deprecated */
	filter_items_count?: Int // The count of filter items in filter group. Use Aggregation.count instead. Deprecated
	/** @deprecated */
	name?: String // The name of a layered navigation filter. Use Aggregation.label instead. Deprecated
	/** @deprecated */
	request_var?: String // The request variable name for a filter query. Use Aggregation.attribute_code instead. Deprecated
}