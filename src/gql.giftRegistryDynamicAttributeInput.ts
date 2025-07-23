import {String} from "./gql.string";
import {ID} from "./gql.ID";
export type GiftRegistryDynamicAttributeInput = {
	code: ID // A unique key for an additional attribute of the event.
	value: String // A string that describes a dynamic attribute.
}