import { SelectedBundleOptionValue } from "./gql.selectedBundleOptionValue";
import { ID } from "./gql.ID";
import { String } from "./gql.string";
import { Int } from "./gql.int";
export type SelectedBundleOption = {
    /** @deprecated */
    id: Int;
    label: String;
    type: String;
    uid: ID;
    values: [SelectedBundleOptionValue];
};
