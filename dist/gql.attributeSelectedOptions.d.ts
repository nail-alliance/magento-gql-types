import { AttributeSelectedOptionInterface } from "./gql.attributeSelectedOptionInterface";
import { ID } from "./gql.ID";
export type AttributeSelectedOptions = {
    code: ID;
    selected_options: AttributeSelectedOptionInterface[];
};
