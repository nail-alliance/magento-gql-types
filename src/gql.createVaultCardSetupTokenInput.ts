import {ThreeDSMode} from "./gql.threeDSMode";
import {VaultSetupTokenInput} from "./gql.vaultSetupTokenInput";
export type CreateVaultCardSetupTokenInput = {
	setup_token: VaultSetupTokenInput // The setup token information
	three_ds_mode?: ThreeDSMode // The 3DS mode
}