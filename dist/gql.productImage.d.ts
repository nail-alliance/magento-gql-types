import { Int } from "./gql.int";
import { String } from "./gql.string";
import { Boolean } from "./gql.boolean";
export type ProductImage = {
    disabled?: Boolean;
    label?: String;
    position?: Int;
    url?: String;
};
