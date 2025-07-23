import { RewardPointsSubscriptionStatusesEnum } from "./gql.rewardPointsSubscriptionStatusesEnum";
export type RewardPointsSubscriptionStatus = {
    balance_updates: RewardPointsSubscriptionStatusesEnum;
    points_expiration_notifications: RewardPointsSubscriptionStatusesEnum;
};
