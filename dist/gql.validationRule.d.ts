import { String } from "./gql.string";
import { ValidationRuleEnum } from "./gql.validationRuleEnum";
export type ValidationRule = {
    name?: ValidationRuleEnum;
    value?: String;
};
