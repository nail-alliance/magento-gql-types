import {String} from "./gql.string";
import {CustomerSegmentApplyTo} from "./gql.customerSegmentApplyTo";
export type CustomerSegment = {
	apply_to: CustomerSegmentApplyTo // Customer segment is applicable to visitor, registered customer or both.
	description?: String // Customer segment description.
	name: String // Customer segment name.
}