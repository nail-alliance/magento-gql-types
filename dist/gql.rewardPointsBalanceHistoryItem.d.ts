import { RewardPointsAmount } from "./gql.rewardPointsAmount";
export type RewardPointsBalanceHistoryItem = {
    "balance"?: RewardPointsAmount | null | undefined;
    "change_reason": string;
    "date": string;
    "points_change": number;
};
