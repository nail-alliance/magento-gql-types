import {String} from "./gql.string";
export type CreateVaultCardPaymentTokenInput = {
	card_description?: String // Description of the vaulted card
	setup_token_id: String // The setup token obtained by the createVaultCardSetupToken endpoint
}