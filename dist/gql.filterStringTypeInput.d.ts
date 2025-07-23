import { String } from "./gql.string";
export type FilterStringTypeInput = {
    eq?: String;
    in?: [String];
    match?: String;
};
