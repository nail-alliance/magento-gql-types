import {String} from "./gql.string";
import {GiftRegistryDynamicAttributeInput} from "./gql.giftRegistryDynamicAttributeInput";
export type AddGiftRegistryRegistrantInput = {
	dynamic_attributes?: GiftRegistryDynamicAttributeInput[] // Additional attributes specified as a code-value pair.
	email: String // The email address of the registrant.
	firstname: String // The first name of the registrant.
	lastname: String // The last name of the registrant.
}