import {Float} from "./gql.float";
import {Money} from "./gql.money";
import {ProductDiscount} from "./gql.productDiscount";
export type TierPrice = {
	discount?: ProductDiscount // The price discount that this tier represents.
	final_price?: Money // The price of the product at this tier.
	quantity?: Float // The minimum number of items that must be purchased to qualify for this price tier.
}