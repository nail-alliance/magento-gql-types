import { ID } from "./gql.ID";
import { String } from "./gql.string";
export type ConfigurableOptionAvailableForSelection = {
    attribute_code: String;
    option_value_uids: [ID];
};
