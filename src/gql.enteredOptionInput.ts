import {String} from "./gql.string";
import {ID} from "./gql.ID";
export type EnteredOptionInput = {
	uid: ID // The unique ID for a CustomizableOptionInterface object, such as a CustomizableFieldOption, CustomizableFileOption, or CustomizableAreaOption object.
	value: String // Text the customer entered.
}