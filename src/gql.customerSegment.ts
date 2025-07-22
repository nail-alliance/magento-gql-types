import {CustomerSegmentApplyTo} from "./gql.customerSegmentApplyTo";

export type CustomerSegment = {
    "apply_to": CustomerSegmentApplyTo
    "description"?: string | null | undefined
    "name": string
}