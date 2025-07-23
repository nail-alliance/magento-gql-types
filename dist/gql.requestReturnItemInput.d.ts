import { SelectedCustomAttributeInput } from "./gql.selectedCustomAttributeInput";
import { Float } from "./gql.float";
import { ID } from "./gql.ID";
import { EnteredCustomAttributeInput } from "./gql.enteredCustomAttributeInput";
export type RequestReturnItemInput = {
    entered_custom_attributes?: EnteredCustomAttributeInput[];
    order_item_uid: ID;
    quantity_to_return: Float;
    selected_custom_attributes?: SelectedCustomAttributeInput[];
};
