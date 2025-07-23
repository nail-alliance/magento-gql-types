import { String } from "./gql.string";
import { ID } from "./gql.ID";
import { GiftRegistryItemsUserErrorType } from "./gql.giftRegistryItemsUserErrorType";
export type GiftRegistryItemsUserError = {
    code: GiftRegistryItemsUserErrorType;
    gift_registry_item_uid?: ID;
    gift_registry_uid?: ID;
    message: String;
    product_uid?: ID;
};
