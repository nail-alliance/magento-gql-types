import {ID} from "./gql.ID";
import {String} from "./gql.string";
import {GiftRegistryRegistrantDynamicAttribute} from "./gql.giftRegistryRegistrantDynamicAttribute";
export type GiftRegistryRegistrant = {
	dynamic_attributes?: GiftRegistryRegistrantDynamicAttribute[] // An array of dynamic attributes assigned to the registrant.
	email: String // The email address of the registrant. Only the registry owner can access this attribute.
	firstname: String // The first name of the registrant.
	lastname: String // The last name of the registrant.
	uid: ID // The unique ID assigned to the registrant.
}