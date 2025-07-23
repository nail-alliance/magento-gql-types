import {ID} from "./gql.ID";
import {Int} from "./gql.int";
import {String} from "./gql.string";
export type ItemNote = {
	created_at?: String // Timestamp that reflects note creation date.
	creator_id?: Int // ID of the user who submitted a note.
	creator_type?: Int // Type of teh user who submitted a note.
	negotiable_quote_item_uid?: ID // The unique ID of a CartItemInterface object.
	note?: String // Note text.
	note_uid?: ID // The unique ID of a ItemNote object.
}