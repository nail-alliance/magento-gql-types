import {SimpleProduct} from "./gql.simpleProduct";
import {ConfigurableAttributeOption} from "./gql.configurableAttributeOption";
export type ConfigurableVariant = {
	attributes?: [ConfigurableAttributeOption] // An array of configurable attribute options.
	product?: SimpleProduct // An array of linked simple products.
}