import { CompanyAccountModel } from "./company-account.model";
import { GradeModel } from "./grade.model";

export class TransactionModel {


	id: number;
	des: string;
	crAmount: number;
	drAmount: number;
	comAccount: CompanyAccountModel;
	// private EmployeeAccountEntity empAccount;
}