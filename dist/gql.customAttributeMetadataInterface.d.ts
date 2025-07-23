import { CustomAttributeOptionInterface } from "./gql.customAttributeOptionInterface";
import { Boolean } from "./gql.boolean";
import { AttributeFrontendInputEnum } from "./gql.attributeFrontendInputEnum";
import { AttributeEntityTypeEnum } from "./gql.attributeEntityTypeEnum";
import { String } from "./gql.string";
import { ID } from "./gql.ID";
export interface CustomAttributeMetadataInterface {
    code: ID;
    default_value?: String;
    entity_type: AttributeEntityTypeEnum;
    frontend_class?: String;
    frontend_input?: AttributeFrontendInputEnum;
    is_required: Boolean;
    is_unique: Boolean;
    label?: String;
    options: CustomAttributeOptionInterface[];
}
