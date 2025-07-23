import { ThreeDSMode } from "./gql.threeDSMode";
import { SDKParams } from "./gql.sDKParams";
import { Boolean } from "./gql.boolean";
export type VaultCreditCardConfig = {
    is_vault_enabled?: Boolean;
    sdk_params?: [SDKParams];
    three_ds_mode?: ThreeDSMode;
};
