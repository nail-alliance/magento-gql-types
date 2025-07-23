import { String } from "./gql.string";
export type FilterTypeInput = {
    eq?: String;
    finset?: String[];
    from?: String;
    gt?: String;
    gteq?: String;
    in?: String[];
    like?: String;
    lt?: String;
    lteq?: String;
    moreq?: String;
    neq?: String;
    nin?: String[];
    notnull?: String;
    null?: String;
    to?: String;
};
