import {String} from "./gql.string";
import {ValidationRuleEnum} from "./gql.validationRuleEnum";
export type ValidationRule = {
	name?: ValidationRuleEnum // Validation rule name applied to a customer attribute.
	value?: String // Validation rule value.
}