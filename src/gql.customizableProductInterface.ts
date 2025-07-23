import {CustomizableOptionInterface} from "./gql.customizableOptionInterface";
export interface CustomizableProductInterface {
	options?: [CustomizableOptionInterface] // An array of options for a customizable product.
}