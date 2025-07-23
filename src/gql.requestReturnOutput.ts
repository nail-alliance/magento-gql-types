import {Returns} from "./gql.returns";
import {Return} from "./gql.return";
export type RequestReturnOutput = {
	return?: Return // Details about a single return request.
	returns?: Returns // An array of return requests.
}