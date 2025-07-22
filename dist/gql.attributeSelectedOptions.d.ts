import { AttributeValueInterface } from "./gql.attributeValueInterface";
import { AttributeSelectedOptionInterface } from "./gql.attributeSelectedOptionInterface";
export type AttributeSelectedOptions = AttributeValueInterface & {
    "selected_options": AttributeSelectedOptionInterface[];
};
