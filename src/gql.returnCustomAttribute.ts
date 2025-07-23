import {ID} from "./gql.ID";
import {String} from "./gql.string";
export type ReturnCustomAttribute = {
	label: String // A description of the attribute.
	uid: ID // The unique ID for a ReturnCustomAttribute object.
	value: String // A JSON-encoded value of the attribute.
}