import {Money} from "./gql.money";
import {PriceAdjustment} from "./gql.priceAdjustment";
/** @deprecated */
export type Price = {
	/** @deprecated */
	adjustments?: PriceAdjustment[] // An array that provides information about tax, weee, or weee_tax adjustments. Use ProductPrice instead. Deprecated
	/** @deprecated */
	amount?: Money // The price of a product plus a three-letter currency code. Use ProductPrice instead. Deprecated
}