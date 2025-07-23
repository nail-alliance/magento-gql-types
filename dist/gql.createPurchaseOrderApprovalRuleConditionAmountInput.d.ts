import { Float } from "./gql.float";
import { CurrencyEnum } from "./gql.currencyEnum";
export type CreatePurchaseOrderApprovalRuleConditionAmountInput = {
    currency: CurrencyEnum;
    value: Float;
};
