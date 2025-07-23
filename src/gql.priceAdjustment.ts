import {PriceAdjustmentDescriptionEnum} from "./gql.priceAdjustmentDescriptionEnum";
import {PriceAdjustmentCodesEnum} from "./gql.priceAdjustmentCodesEnum";
import {Money} from "./gql.money";
/** @deprecated */
export type PriceAdjustment = {
	/** @deprecated */
	amount?: Money // The amount of the price adjustment and its currency code. Deprecated
	/** @deprecated */
	code?: PriceAdjustmentCodesEnum // Indicates whether the adjustment involves tax, weee, or weee_tax. PriceAdjustment is deprecated. Deprecated
	/** @deprecated */
	description?: PriceAdjustmentDescriptionEnum // Indicates whether the entity described by the code attribute is included or excluded from the adjustment. PriceAdjustment is deprecated. Deprecated
}