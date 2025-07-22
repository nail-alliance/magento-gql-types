import { ID } from "./gql.ID";
import { SelectedCustomizableOptionValue } from "./gql.selectedCustomizableOptionValue";
export type SelectedCustomizableOption = {
    "customizable_option_uid": ID;
    /** @deprecated */
    "id": number;
    "is_required": boolean;
    "label": string;
    "sort_order": number;
    "type": string;
    "values": SelectedCustomizableOptionValue[];
};
