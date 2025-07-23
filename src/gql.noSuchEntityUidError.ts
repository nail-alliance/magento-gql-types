import {ID} from "./gql.ID";
import {String} from "./gql.string";
export type NoSuchEntityUidError = {
	message: String // The returned error message.
	uid: ID // The specified invalid unique ID of an object.
}