import {Money} from "./gql.money";
export type CompanyCredit = {
	available_credit: Money // The sum of the credit limit and the outstanding balance. If the company has exceeded the credit limit, the amount is as a negative value.
	credit_limit: Money // The amount of credit extended to the company.
	outstanding_balance: Money // The amount reimbursed, less the total due from all orders placed using the Payment on Account payment method. The amount can be a positive or negative value.
}