import { ID } from "./gql.ID";
import { String } from "./gql.string";
import { Int } from "./gql.int";
export type Breadcrumb = {
    /** @deprecated */
    category_id?: Int;
    category_level?: Int;
    category_name?: String;
    category_uid: ID;
    category_url_key?: String;
    category_url_path?: String;
};
