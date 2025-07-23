import { Int } from "./gql.int";
import { String } from "./gql.string";
import { Boolean } from "./gql.boolean";
export interface MediaGalleryInterface {
    disabled?: Boolean;
    label?: String;
    position?: Int;
    url?: String;
}
