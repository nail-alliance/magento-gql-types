import { GiftRegistryItemsUserError } from "./gql.giftRegistryItemsUserError";
import { Boolean } from "./gql.boolean";
import { GiftRegistry } from "./gql.giftRegistry";
export type MoveCartItemsToGiftRegistryOutput = {
    gift_registry?: GiftRegistry;
    status: Boolean;
    user_errors: GiftRegistryItemsUserError[];
};
