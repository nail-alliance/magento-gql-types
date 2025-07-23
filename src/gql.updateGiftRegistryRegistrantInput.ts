import {ID} from "./gql.ID";
import {String} from "./gql.string";
import {GiftRegistryDynamicAttributeInput} from "./gql.giftRegistryDynamicAttributeInput";
export type UpdateGiftRegistryRegistrantInput = {
	dynamic_attributes?: [GiftRegistryDynamicAttributeInput] // As a result of the update, only the values of provided attributes will be affected. If the attribute is missing in the request, its value will not be changed.
	email?: String // The updated email address of the registrant.
	firstname?: String // The updated first name of the registrant.
	gift_registry_registrant_uid: ID // The unique ID of a giftRegistryRegistrant object.
	lastname?: String // The updated last name of the registrant.
}