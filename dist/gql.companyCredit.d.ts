import { Money } from "./gql.money";
export type CompanyCredit = {
    available_credit: Money;
    credit_limit: Money;
    outstanding_balance: Money;
};
