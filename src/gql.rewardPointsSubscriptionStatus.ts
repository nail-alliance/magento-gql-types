import {RewardPointsSubscriptionStatusesEnum} from "./gql.rewardPointsSubscriptionStatusesEnum";
export type RewardPointsSubscriptionStatus = {
	balance_updates: RewardPointsSubscriptionStatusesEnum // Indicates whether the customer subscribes to 'Reward points balance updates' emails.
	points_expiration_notifications: RewardPointsSubscriptionStatusesEnum // Indicates whether the customer subscribes to 'Reward points expiration notifications' emails.
}