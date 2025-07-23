import {Price} from "./gql.price";
/** @deprecated */
export type ProductPrices = {
	/** @deprecated */
	maximalPrice?: Price // The highest possible final price for all the options defined within a composite product. If you are specifying a price range, this would be the to value. Use PriceRange.maximum_price instead. Deprecated
	/** @deprecated */
	minimalPrice?: Price // The lowest possible final price for all the options defined within a composite product. If you are specifying a price range, this would be the from value. Use PriceRange.minimum_price instead. Deprecated
	/** @deprecated */
	regularPrice?: Price // The base price of a product. Use regular_price from PriceRange.minimum_price or PriceRange.maximum_price instead. Deprecated
}