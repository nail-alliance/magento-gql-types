import { FilterMatchTypeInput } from "./gql.filterMatchTypeInput";
import { FilterEqualTypeInput } from "./gql.filterEqualTypeInput";
export type CategoryFilterInput = {
    category_uid?: FilterEqualTypeInput;
    /** @deprecated */
    ids?: FilterEqualTypeInput;
    name?: FilterMatchTypeInput;
    parent_category_uid?: FilterEqualTypeInput;
    parent_id?: FilterEqualTypeInput;
    url_key?: FilterEqualTypeInput;
    url_path?: FilterEqualTypeInput;
};
