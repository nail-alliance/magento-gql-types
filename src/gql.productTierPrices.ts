import {Float} from "./gql.float";
import {String} from "./gql.string";
/** @deprecated */
export type ProductTierPrices = {
	/** @deprecated */
	customer_group_id?: String // The ID of the customer group. Not relevant for the storefront. Deprecated
	/** @deprecated */
	percentage_value?: Float // The percentage discount of the item. Use TierPrice.discount instead. Deprecated
	/** @deprecated */
	qty?: Float // The number of items that must be purchased to qualify for tier pricing. Use TierPrice.quantity instead. Deprecated
	/** @deprecated */
	value?: Float // The price of the fixed price item. Use TierPrice.final_price instead. Deprecated
	/** @deprecated */
	website_id?: Float // The ID assigned to the website. Not relevant for the storefront. Deprecated
}