import { Int } from "./gql.int";
import { ID } from "./gql.ID";
import { String } from "./gql.string";
export type ConfigurableAttributeOption = {
    code?: String;
    label?: String;
    uid: ID;
    value_index?: Int;
};
