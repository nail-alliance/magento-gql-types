import {Float} from "./gql.float";
import {String} from "./gql.string";
import {RewardPointsAmount} from "./gql.rewardPointsAmount";
export type RewardPointsBalanceHistoryItem = {
	balance?: RewardPointsAmount // The award points balance after the completion of the transaction.
	change_reason: String // The reason the balance changed.
	date: String // The date of the transaction.
	points_change: Float // The number of points added or deducted in the transaction.
}