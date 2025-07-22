import {Money} from "./gql.money";
import {PriceAdjustmentCodesEnum} from "./gql.priceAdjustmentCodesEnum";
import {PriceAdjustmentDescriptionEnum} from "./gql.priceAdjustmentDescriptionEnum";

/** @deprecated */
export type PriceAdjustment = {
    "amount": Money
    /** @deprecated */
    "code": PriceAdjustmentCodesEnum
    /** @deprecated */
    "description": PriceAdjustmentDescriptionEnum
}

