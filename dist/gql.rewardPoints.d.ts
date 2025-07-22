import { RewardPointsAmount } from "./gql.rewardPointsAmount";
import { RewardPointsBalanceHistoryItem } from "./gql.rewardPointsBalanceHistoryItem";
import { RewardPointsExchangeRates } from "./gql.rewardPointsExchangeRates";
import { RewardPointsSubscriptionStatus } from "./gql.rewardPointsSubscriptionStatus";
export type RewardPoints = {
    "balance"?: RewardPointsAmount | null | undefined;
    "balance_history"?: RewardPointsBalanceHistoryItem[] | null | undefined;
    "exchange_rates"?: RewardPointsExchangeRates | null | undefined;
    "subscription_status"?: RewardPointsSubscriptionStatus | null | undefined;
};
