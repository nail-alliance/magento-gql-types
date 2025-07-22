import { ID } from "./gql.ID";
import { ComparableAttribute } from "./gql.comparableAttribute";
import { ComparableItem } from "./gql.comparableItem";
export type CompareList = {
    "attributes"?: ComparableAttribute[] | null | undefined;
    "item_count": number;
    "items"?: ComparableItem[] | null | undefined;
    "uid": ID;
};
