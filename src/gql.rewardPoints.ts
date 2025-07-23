import {RewardPointsSubscriptionStatus} from "./gql.rewardPointsSubscriptionStatus";
import {RewardPointsExchangeRates} from "./gql.rewardPointsExchangeRates";
import {RewardPointsBalanceHistoryItem} from "./gql.rewardPointsBalanceHistoryItem";
import {RewardPointsAmount} from "./gql.rewardPointsAmount";
export type RewardPoints = {
	balance?: RewardPointsAmount // The current balance of reward points.
	balance_history?: RewardPointsBalanceHistoryItem[] // The balance history of reward points. If the ability for customers to view the balance history has been disabled in the Admin, this field will be set to null.
	exchange_rates?: RewardPointsExchangeRates // The current exchange rates for reward points.
	subscription_status?: RewardPointsSubscriptionStatus // The subscription status of emails related to reward points.
}