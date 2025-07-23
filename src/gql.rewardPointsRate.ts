import {Float} from "./gql.float";
export type RewardPointsRate = {
	currency_amount: Float // The money value for the exchange rate. For earnings, this is the amount spent to earn the specified points. For redemption, this is the amount of money the number of points represents.
	points: Float // The number of points for an exchange rate. For earnings, this is the number of points earned. For redemption, this is the number of points needed for redemption.
}