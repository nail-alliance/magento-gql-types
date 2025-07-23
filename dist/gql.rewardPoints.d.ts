import { RewardPointsSubscriptionStatus } from "./gql.rewardPointsSubscriptionStatus";
import { RewardPointsExchangeRates } from "./gql.rewardPointsExchangeRates";
import { RewardPointsBalanceHistoryItem } from "./gql.rewardPointsBalanceHistoryItem";
import { RewardPointsAmount } from "./gql.rewardPointsAmount";
export type RewardPoints = {
    balance?: RewardPointsAmount;
    balance_history?: [RewardPointsBalanceHistoryItem];
    exchange_rates?: RewardPointsExchangeRates;
    subscription_status?: RewardPointsSubscriptionStatus;
};
