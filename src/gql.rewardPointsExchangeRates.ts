import {RewardPointsRate} from "./gql.rewardPointsRate";

export type RewardPointsExchangeRates = {
    "earning"?: RewardPointsRate | null | undefined
    "redemption"?: RewardPointsRate | null | undefined
}