import { ID } from "./gql.ID";
import { String } from "./gql.string";
export type GiftRegistrySearchResult = {
    event_date?: String;
    event_title: String;
    gift_registry_uid: ID;
    location?: String;
    name: String;
    type?: String;
};
