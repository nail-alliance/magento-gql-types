import { GiftRegistryItemsUserError } from "./gql.giftRegistryItemsUserError";
import { Boolean } from "./gql.boolean";
export interface GiftRegistryItemUserErrorInterface {
    status: Boolean;
    user_errors: [GiftRegistryItemsUserError];
}
