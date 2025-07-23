import { Float } from "./gql.float";
import { String } from "./gql.string";
import { EnteredOptionInput } from "./gql.enteredOptionInput";
export type RequisitionListItemsInput = {
    entered_options?: EnteredOptionInput[];
    parent_sku?: String;
    quantity?: Float;
    selected_options?: String[];
    sku: String;
};
