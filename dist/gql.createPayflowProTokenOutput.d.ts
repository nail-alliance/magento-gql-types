import { Int } from "./gql.int";
import { String } from "./gql.string";
export type CreatePayflowProTokenOutput = {
    response_message: String;
    result: Int;
    result_code: Int;
    secure_token: String;
    secure_token_id: String;
};
