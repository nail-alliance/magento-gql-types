import {String} from "./gql.string";
import {Int} from "./gql.int";
export type AreaInput = {
	radius: Int // The radius for the search in KM.
	search_term: String // The country code where search must be performed. Required parameter together with region, city or postcode.
}