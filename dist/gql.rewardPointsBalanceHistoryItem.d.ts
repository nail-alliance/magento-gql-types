import { Float } from "./gql.float";
import { String } from "./gql.string";
import { RewardPointsAmount } from "./gql.rewardPointsAmount";
export type RewardPointsBalanceHistoryItem = {
    balance?: RewardPointsAmount;
    change_reason: String;
    date: String;
    points_change: Float;
};
