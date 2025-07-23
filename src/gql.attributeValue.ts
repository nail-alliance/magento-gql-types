import {String} from "./gql.string";
import {ID} from "./gql.ID";
export type AttributeValue = {
	code: ID // The attribute code.
	value: String // The attribute value.
}