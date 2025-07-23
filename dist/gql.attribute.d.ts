import { StorefrontProperties } from "./gql.storefrontProperties";
import { AttributeOption } from "./gql.attributeOption";
import { String } from "./gql.string";
export type Attribute = {
    attribute_code?: String;
    attribute_options?: [AttributeOption];
    attribute_type?: String;
    entity_type?: String;
    input_type?: String;
    storefront_properties?: StorefrontProperties;
};
