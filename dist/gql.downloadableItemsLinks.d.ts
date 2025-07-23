import { ID } from "./gql.ID";
import { String } from "./gql.string";
import { Int } from "./gql.int";
export type DownloadableItemsLinks = {
    sort_order?: Int;
    title?: String;
    uid: ID;
};
