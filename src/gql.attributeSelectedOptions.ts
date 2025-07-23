import {AttributeSelectedOptionInterface} from "./gql.attributeSelectedOptionInterface";
import {ID} from "./gql.ID";
export type AttributeSelectedOptions = {
	code: ID // The attribute code.
	selected_options: [AttributeSelectedOptionInterface] // 
}