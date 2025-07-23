import { Boolean } from "./gql.boolean";
import { Int } from "./gql.int";
import { String } from "./gql.string";
export type ButtonStyles = {
    color?: String;
    height?: Int;
    label?: String;
    layout?: String;
    shape?: String;
    tagline?: Boolean;
    use_default_height?: Boolean;
};
