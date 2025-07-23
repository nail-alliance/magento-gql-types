import {RewardPointsRate} from "./gql.rewardPointsRate";
export type RewardPointsExchangeRates = {
	earning?: RewardPointsRate // How many points are earned for a given amount spent.
	redemption?: RewardPointsRate // How many points must be redeemed to get a given amount of currency discount at the checkout.
}