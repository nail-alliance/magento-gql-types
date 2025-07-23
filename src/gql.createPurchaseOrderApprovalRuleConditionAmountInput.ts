import {Float} from "./gql.float";
import {CurrencyEnum} from "./gql.currencyEnum";
export type CreatePurchaseOrderApprovalRuleConditionAmountInput = {
	currency: CurrencyEnum // Purchase order approval rule condition amount currency.
	value: Float // Purchase order approval rule condition amount value.
}