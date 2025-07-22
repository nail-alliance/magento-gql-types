import { Money } from "./gql.money";
export type TaxItem = {
    "amount": Money;
    "rate": number;
    "title": string;
};
