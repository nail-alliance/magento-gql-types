import {Int} from "./gql.int";
import {String} from "./gql.string";
export type Region = {
	code?: String // The two-letter code for the region, such as TX for Texas.
	id?: Int // The unique ID for a Region object.
	name?: String // The name of the region, such as Texas.
}