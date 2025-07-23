import { Money } from "./gql.money";
import { PriceAdjustment } from "./gql.priceAdjustment";
/** @deprecated */
export type Price = {
    /** @deprecated */
    adjustments?: PriceAdjustment[];
    /** @deprecated */
    amount?: Money;
};
