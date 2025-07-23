import { String } from "./gql.string";
import { HttpQueryParameter } from "./gql.httpQueryParameter";
export type UrlRewrite = {
    parameters?: HttpQueryParameter[];
    url?: String;
};
