import {AttributeValueInterface} from "./gql.attributeValueInterface";
import {AttributeMetadataError} from "./gql.attributeMetadataError";

export type ProductCustomAttributes = {
    "errors": AttributeMetadataError[]
    "items": AttributeValueInterface[]
}

