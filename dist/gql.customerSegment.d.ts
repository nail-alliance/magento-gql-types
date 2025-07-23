import { String } from "./gql.string";
import { CustomerSegmentApplyTo } from "./gql.customerSegmentApplyTo";
export type CustomerSegment = {
    apply_to: CustomerSegmentApplyTo;
    description?: String;
    name: String;
};
