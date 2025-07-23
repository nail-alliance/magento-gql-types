import { ItemSelectedBundleOptionValue } from "./gql.itemSelectedBundleOptionValue";
import { String } from "./gql.string";
import { ID } from "./gql.ID";
export type ItemSelectedBundleOption = {
    /** @deprecated */
    id: ID;
    label: String;
    uid: ID;
    values?: ItemSelectedBundleOptionValue[];
};
