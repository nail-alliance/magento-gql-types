import {SDKParams} from "./gql.sDKParams";
import {String} from "./gql.string";
export type PaymentSDKParamsItem = {
	code?: String // The payment method code used in the order
	params?: SDKParams[] // The payment SDK parameters
}