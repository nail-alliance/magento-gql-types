import {SelectedCustomAttributeInput} from "./gql.selectedCustomAttributeInput";
import {Float} from "./gql.float";
import {ID} from "./gql.ID";
import {EnteredCustomAttributeInput} from "./gql.enteredCustomAttributeInput";
export type RequestReturnItemInput = {
	entered_custom_attributes?: EnteredCustomAttributeInput[] // Details about a custom attribute that was entered.
	order_item_uid: ID // The unique ID for a OrderItemInterface object.
	quantity_to_return: Float // The quantity of the item to be returned.
	selected_custom_attributes?: SelectedCustomAttributeInput[] // An array of selected custom option IDs associated with the item to be returned. For example, the IDs for the selected color and size of a configurable product.
}