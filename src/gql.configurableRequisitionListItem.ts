import {ID} from "./gql.ID";
import {Float} from "./gql.float";
import {ProductInterface} from "./gql.productInterface";
import {SelectedCustomizableOption} from "./gql.selectedCustomizableOption";
import {SelectedConfigurableOption} from "./gql.selectedConfigurableOption";
export type ConfigurableRequisitionListItem = {
	configurable_options?: [SelectedConfigurableOption] // Selected configurable options for an item in the requisition list.
	customizable_options: [SelectedCustomizableOption] // Selected custom options for an item in the requisition list.
	product: ProductInterface // Details about a requisition list item.
	quantity: Float // The quantity of the product added to the requisition list.
	uid: ID // The unique ID of an item in a requisition list.
}