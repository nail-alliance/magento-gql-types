import { ConfigurableProductOptionValue } from "./gql.configurableProductOptionValue";
import { ID } from "./gql.ID";
import { String } from "./gql.string";
export type ConfigurableProductOption = {
    attribute_code: String;
    label: String;
    uid: ID;
    values?: [ConfigurableProductOptionValue];
};
