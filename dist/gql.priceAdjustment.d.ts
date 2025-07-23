import { PriceAdjustmentDescriptionEnum } from "./gql.priceAdjustmentDescriptionEnum";
import { PriceAdjustmentCodesEnum } from "./gql.priceAdjustmentCodesEnum";
import { Money } from "./gql.money";
/** @deprecated */
export type PriceAdjustment = {
    /** @deprecated */
    amount?: Money;
    /** @deprecated */
    code?: PriceAdjustmentCodesEnum;
    /** @deprecated */
    description?: PriceAdjustmentDescriptionEnum;
};
