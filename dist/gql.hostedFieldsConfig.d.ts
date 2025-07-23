import { ThreeDSMode } from "./gql.threeDSMode";
import { SDKParams } from "./gql.sDKParams";
import { Boolean } from "./gql.boolean";
import { String } from "./gql.string";
export type HostedFieldsConfig = {
    cc_vault_code?: String;
    code?: String;
    is_vault_enabled?: Boolean;
    is_visible?: Boolean;
    payment_intent?: String;
    payment_source?: String;
    requires_card_details?: Boolean;
    sdk_params?: SDKParams[];
    sort_order?: String;
    /** @deprecated */
    three_ds?: Boolean;
    three_ds_mode?: ThreeDSMode;
    title?: String;
};
