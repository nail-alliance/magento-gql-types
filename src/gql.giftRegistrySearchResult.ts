import {ID} from "./gql.ID";
import {String} from "./gql.string";
export type GiftRegistrySearchResult = {
	event_date?: String // The date of the event.
	event_title: String // The title given to the event.
	gift_registry_uid: ID // The URL key of the gift registry.
	location?: String // The location of the event.
	name: String // The name of the gift registry owner.
	type?: String // The type of event being held.
}