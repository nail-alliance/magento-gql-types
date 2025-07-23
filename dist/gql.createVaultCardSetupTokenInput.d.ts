import { ThreeDSMode } from "./gql.threeDSMode";
import { VaultSetupTokenInput } from "./gql.vaultSetupTokenInput";
export type CreateVaultCardSetupTokenInput = {
    setup_token: VaultSetupTokenInput;
    three_ds_mode?: ThreeDSMode;
};
