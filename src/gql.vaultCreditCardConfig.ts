import {ThreeDSMode} from "./gql.threeDSMode";
import {SDKParams} from "./gql.sDKParams";
import {Boolean} from "./gql.boolean";
export type VaultCreditCardConfig = {
	is_vault_enabled?: Boolean // Is vault enabled
	sdk_params?: [SDKParams] // The parameters required to load the Paypal JS SDK
	three_ds_mode?: ThreeDSMode // 3DS mode
}