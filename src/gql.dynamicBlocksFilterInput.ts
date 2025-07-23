import {DynamicBlockTypeEnum} from "./gql.dynamicBlockTypeEnum";
import {DynamicBlockLocationEnum} from "./gql.dynamicBlockLocationEnum";
import {ID} from "./gql.ID";
export type DynamicBlocksFilterInput = {
	dynamic_block_uids?: ID[] // An array of dynamic block UIDs to filter on.
	locations?: DynamicBlockLocationEnum[] // An array indicating the locations the dynamic block can be placed.
	type: DynamicBlockTypeEnum // A value indicating the type of dynamic block to filter on.
}