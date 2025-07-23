import { String } from "./gql.string";
import { Float } from "./gql.float";
import { ID } from "./gql.ID";
import { EnteredOptionInput } from "./gql.enteredOptionInput";
export type UpdateRequisitionListItemsInput = {
    entered_options?: [EnteredOptionInput];
    item_id: ID;
    quantity?: Float;
    selected_options?: [String];
};
