import {HttpQueryParameter} from "./gql.httpQueryParameter";

export type UrlRewrite = {
    "parameters"?: HttpQueryParameter[] | null | undefined
    "url"?: string | null | undefined
}