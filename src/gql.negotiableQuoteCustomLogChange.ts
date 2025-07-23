import {String} from "./gql.string";
export type NegotiableQuoteCustomLogChange = {
	new_value: String // The new entry content.
	old_value?: String // The previous entry in the custom log.
	title: String // The title of the custom log entry.
}