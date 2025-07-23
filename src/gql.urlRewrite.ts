import {String} from "./gql.string";
import {HttpQueryParameter} from "./gql.httpQueryParameter";
export type UrlRewrite = {
	parameters?: [HttpQueryParameter] // An array of request parameters.
	url?: String // The request URL.
}