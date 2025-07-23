import {Float} from "./gql.float";
import {Money} from "./gql.money";
export type RewardPointsAmount = {
	money: Money // The reward points amount in store currency.
	points: Float // The reward points amount in points.
}