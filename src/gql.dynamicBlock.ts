import {ID} from "./gql.ID";
import {ComplexTextValue} from "./gql.complexTextValue";
export type DynamicBlock = {
	content: ComplexTextValue // The renderable HTML code of the dynamic block.
	uid: ID // The unique ID of a DynamicBlock object.
}