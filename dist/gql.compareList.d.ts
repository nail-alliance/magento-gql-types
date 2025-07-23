import { ID } from "./gql.ID";
import { ComparableItem } from "./gql.comparableItem";
import { Int } from "./gql.int";
import { ComparableAttribute } from "./gql.comparableAttribute";
export type CompareList = {
    attributes?: ComparableAttribute[];
    item_count: Int;
    items?: ComparableItem[];
    uid: ID;
};
