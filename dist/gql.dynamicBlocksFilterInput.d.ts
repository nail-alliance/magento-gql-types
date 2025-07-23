import { DynamicBlockTypeEnum } from "./gql.dynamicBlockTypeEnum";
import { DynamicBlockLocationEnum } from "./gql.dynamicBlockLocationEnum";
import { ID } from "./gql.ID";
export type DynamicBlocksFilterInput = {
    dynamic_block_uids?: ID[];
    locations?: DynamicBlockLocationEnum[];
    type: DynamicBlockTypeEnum;
};
