import { AttributeInputSelectedOption } from "./gql.attributeInputSelectedOption";
import { String } from "./gql.string";
export type AttributeValueInput = {
    attribute_code: String;
    selected_options?: [AttributeInputSelectedOption];
    value?: String;
};
