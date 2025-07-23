import { SelectedCustomizableOptionValue } from "./gql.selectedCustomizableOptionValue";
import { String } from "./gql.string";
import { Boolean } from "./gql.boolean";
import { Int } from "./gql.int";
import { ID } from "./gql.ID";
export type SelectedCustomizableOption = {
    customizable_option_uid: ID;
    /** @deprecated */
    id: Int;
    is_required: Boolean;
    label: String;
    sort_order: Int;
    type: String;
    values: [SelectedCustomizableOptionValue];
};
