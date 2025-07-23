import {Boolean} from "./gql.boolean";
export type SendFriendConfiguration = {
	enabled_for_customers: Boolean // Indicates whether the Email to a Friend feature is enabled.
	enabled_for_guests: Boolean // Indicates whether the Email to a Friend feature is enabled for guests.
}