import { SimpleProduct } from "./gql.simpleProduct";
import { ConfigurableAttributeOption } from "./gql.configurableAttributeOption";
export type ConfigurableVariant = {
    attributes?: ConfigurableAttributeOption[];
    product?: SimpleProduct;
};
